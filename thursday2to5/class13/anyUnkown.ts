let person: unknown;
person = "bilal";

if (typeof person === "string") {
  console.log(person.toUpperCase());
}

let a: unknown = "zia";

console.log((a as string).length);
