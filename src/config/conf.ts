import { env } from "process";

import mtData from "@/src/config/money-tree.config.json";
import ksData from "@/src/config/kupit-sajenci.json";

type TConf = typeof ksData;

export const conf = (): TConf => {
  switch (env.PROJECT_NAME) {
    case "kupit-sajenci":
      return ksData;
    case "money-tree":
      return mtData;
    default:
      return {
        name: "unknown",
        title: "unknown",
        content: {
          logo: {
            width: 172,
            height: 52,
          },
          hero: {
            slides: [
              {
                title: "unknown",
                subTitle: "Создайте",
                btn: "Узнать подробнее",
                bgColor: "swiper-slide__bg-1",
              },
              {
                title: "Cуккулентов и толстянок",
                subTitle: "Широкий выбор ",
                btn: "Узнать подробнее",
                bgColor: "swiper-slide__bg-2",
              },
              {
                title: "Грунты, горшки и кашпо",
                btn: "Узнать подробнее",
                bgColor: "swiper-slide__bg-3",
              },
            ],
          },
        },
      };
  }
};
