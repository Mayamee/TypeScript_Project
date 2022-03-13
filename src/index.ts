import { User } from "./User";
import { Company } from "./Company";
import { CustomMap } from "./CustomMap";

// const company = new Company();
// console.log(user);
// console.log(company);
// console.log(googleMapsElem);

// new google.maps.Map(googleMapsElem, {
//   zoom: 1,
//   center: { lat: 0, lng: 0 },
// });

const user = new User();
const company = new Company();
const map = new CustomMap("google-map");
map.addMarker(user);
map.addMarker(company);
