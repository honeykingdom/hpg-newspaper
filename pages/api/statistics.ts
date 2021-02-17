import type { NextApiRequest, NextApiResponse } from "next";
import fetch from "isomorphic-fetch";
import yaml from "js-yaml";

const ORDER = [2, 1, 0, 4, 5, 3];

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const response = await fetch(
      `https://hpg.su/api/info?steamToken=${process.env.STEAM_TOKEN}`
    );
    const data = await response.json();

    const players = data.map((player: any) => ({
      name: player.name.toLowerCase(),
      time: player.timer.slice(0, -3),
      level: player.level,
      points: player.influence.points.current,
      partner:
        player.mates.list.map((mate: any) => mate.name.trim()).join(", ") ||
        "Отсутствует",
    })) as any[];
    const statistics = players.map((_, i) => players[ORDER[i]]);

    statistics[2].name = "mistafaker";

    const yamlResult = yaml.dump({ statistics }, { quotingType: '"' });

    res.status(200);
    res.setHeader("Content-Type", "text/plain; charset=utf-8");
    res.write(yamlResult);
    res.end();
  } catch (e) {
    res.status(500).json({ error: "Something went wrong" });
  }
};
