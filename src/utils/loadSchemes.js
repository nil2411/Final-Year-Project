import soil from "../data/soil_health.json";
import seeds from "../data/seeds.json";
import irrigation from "../data/irrigation.json";
import training from "../data/training_extension.json";
import machinery from "../data/machinery_technology.json";
import credit from "../data/agriculture_credit.json";
import insurance from "../data/agricultural_insurance.json";
import plant from "../data/plant_protection.json";
import marketing from "../data/agriculture_marketing.json";
import national from "../data/national_schemes.json";

function withCategory(data) {
  return data.items.map((item) => ({
    ...item,
    category: data.category,
    level: data.level || "STATE",
    state: data.state || "MH",
  }));
}

export function loadAllSchemes() {
  return [
    ...withCategory(soil),
    ...withCategory(seeds),
    ...withCategory(irrigation),
    ...withCategory(training),
    ...withCategory(machinery),
    ...withCategory(credit),
    ...withCategory(insurance),
    ...withCategory(plant),
    ...withCategory(marketing),
    ...withCategory(national),
  ];
}
