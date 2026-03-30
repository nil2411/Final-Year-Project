import time
import schedule
from scraper import scrape_schemes

def main():
    print("Initial scheme scraping started...")
    scrape_schemes()
    
    # Schedule to run every 24 hours
    schedule.every(24).hours.do(scrape_schemes)
    
    print("\nScheduler is running. National schemes will update every 24 hours.")
    print("Keep this terminal open to continue automatic updates.")
    
    while True:
        schedule.run_pending()
        time.sleep(60) # Wait 1 minute between checks

if __name__ == "__main__":
    main()
