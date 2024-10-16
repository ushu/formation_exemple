"use server";

import { random } from "radash";

export default async function getRandomValue() {
  return random(0, 100);
}
