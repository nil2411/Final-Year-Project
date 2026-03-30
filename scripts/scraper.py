import requests
from bs4 import BeautifulSoup
import json
import urllib3
import os

# Disable insecure request warnings from urllib3
urllib3.disable_warnings(urllib3.exceptions.InsecureRequestWarning)

URL = "https://agriwelfare.gov.in/en/Major"
BASE_URL = "https://agriwelfare.gov.in"

OUTPUT_FILE = os.path.join(
    os.path.dirname(__file__), 
    "..", 
    "src", 
    "data", 
    "national_schemes.json"
)

DETAILS_FILE = os.path.join(
    os.path.dirname(__file__),
    "national_scheme_details.json"
)

NEWS_OUTPUT_FILE = os.path.join(
    os.path.dirname(__file__), 
    "..", 
    "src", 
    "data", 
    "news.json"
)


def load_scheme_details():
    try:
        with open(DETAILS_FILE, 'r', encoding='utf-8') as f:
            return json.load(f)
    except Exception as e:
        print(f"Warning: Could not load detailed explanations from {DETAILS_FILE}. Error: {e}")
        return {}

def scrape_schemes():
    print(f"Fetching {URL}...")
    try:
        response = requests.get(URL, verify=False, timeout=10)
        response.raise_for_status()
    except Exception as e:
        print(f"Error fetching URL: {e}")
        return

    soup = BeautifulSoup(response.content, 'html.parser')
    
    # Locate all tables
    tables = soup.find_all('table')
    
    schemes = []
    
    # Load detailed explanations from external JSON
    scheme_details_db = load_scheme_details()
    
    for table in tables:
        rows = table.find_all('tr')
        if not rows:
            continue
            
        header_texts = [col.get_text(strip=True).lower() for col in rows[0].find_all(['th', 'td'])]
        # Check if this table has a "title"
        if any('title' in h for h in header_texts) or len(rows) > 3:
            for row in rows[1:]:
                cols = row.find_all(['td', 'th'])
                if len(cols) >= 3:
                    title = cols[1].get_text(strip=True)
                    publish_date = cols[2].get_text(strip=True)
                    
                    details_col = cols[3] if len(cols) >= 4 else None
                    link = ""
                    
                    if details_col:
                        anchor = details_col.find('a')
                        if anchor and 'href' in anchor.attrs:
                            link = anchor['href']
                            if link.startswith('/'):
                                link = BASE_URL + link
                    
                    # Try to get detailed explanations from our mapping
                    details = scheme_details_db.get(title, {
                        "component_name": "National Level Implementation",
                        "benefit": "Financial or advisory aid as per the scheme guidelines.",
                        "eligibility": "All eligible farmers in India.",
                        "how_to_apply": "Apply through central portal linked below."
                    })
                    
                    # Transform the data structure into the expected schema
                    scheme_entry = {
                        "scheme_name": title,
                        "component_name": details["component_name"],
                        "season": ["All Year"],
                        "benefit": details["benefit"],
                        "eligibility": details["eligibility"],
                        "how_to_apply": details["how_to_apply"],
                        "contact": {
                            "office": "Central Government of India",
                            "phone": "Toll Free: 1800-180-1551",
                            "website": link
                        },
                        "last_updated": publish_date
                    }
                    schemes.append(scheme_entry)
            break 

    if not schemes:
        print("No schemes found. Checking table structures...")
        return
    
    # Build final schema
    final_output = {
        "category": "Ministry Major Schemes",
        "level": "NATIONAL",
        "state": "INDIA",
        "items": schemes
    }

    os.makedirs(os.path.dirname(OUTPUT_FILE), exist_ok=True)
    
    with open(OUTPUT_FILE, 'w', encoding='utf-8') as f:
        json.dump(final_output, f, indent=4, ensure_ascii=False)
    
    print(f"Successfully scraped {len(schemes)} national schemes into {OUTPUT_FILE}")

def scrape_pm_kisan_news():
    url = "https://pmkisan.gov.in/"
    print(f"Fetching news from {url}...")
    try:
        response = requests.get(url, verify=False, timeout=10)
        response.raise_for_status()
    except Exception as e:
        print(f"Error fetching PM-Kisan URL: {e}")
        return

    soup = BeautifulSoup(response.content, 'html.parser')
    
    # Simple heuristic to extract the main announcements/news
    # Look for paragraphs that typically container news items
    news_items = []
    
    # Try finding elements containing "Installment" or "eKYC"
    import re
    installment_tag = soup.find(string=re.compile('Installment', re.I))
    if installment_tag and installment_tag.parent:
        news_items.append(installment_tag.parent.text.strip().replace('\n', ' ').replace('\r', ''))
        
    ekyc_tag = soup.find(string=re.compile('eKYC is MANDATORY', re.I))
    if ekyc_tag and ekyc_tag.parent:
        news_items.append(ekyc_tag.parent.text.strip().replace('\n', ' ').replace('\r', ''))
        
    if not news_items:
        # Fallback generic strings if the HTML changes structurally
        news_items = [
            "eKYC is MANDATORY for PMKISAN Registered Farmers. OTP Based eKYC is available on PMKISAN Portal.",
            "Please check the PM-Kisan portal for the latest updates regarding the instalment release."
        ]
        
    # Remove duplicates and clean up
    clean_items = list(dict.fromkeys([item for item in news_items if item]))

    os.makedirs(os.path.dirname(NEWS_OUTPUT_FILE), exist_ok=True)
    with open(NEWS_OUTPUT_FILE, 'w', encoding='utf-8') as f:
        json.dump(clean_items, f, indent=4, ensure_ascii=False)
        
    print(f"Successfully scraped {len(clean_items)} news items into {NEWS_OUTPUT_FILE}")


if __name__ == "__main__":
    scrape_schemes()
    scrape_pm_kisan_news()
