import React from "react";
import GameItem from "../../Components/GameItem/GameItem";
import styles from "../HomePage/HomePage.module.css";

const GAMES = [
  {
    image:
      "https://festivalsherpa-wpengine.netdna-ssl.com/wp-content/uploads/2021/12/Marvels-Spider-Man-2-Featured-image-1536x768.jpg",
    title: "Marvel's Spider-Man",
    genres: ["Экшен", " От третьего лица", "Открытый мир"],
    price: 1582,
    video: "",
    id: 1,
    description:
      "Супергероическая экшен-адвенчура от студии Insomniac.Проект даст нам возможность ощутить себя в роли Питера Паркера, который уже освоил свою необычную силу и преуспел в борьбе с преступностью. На вашем пути появятся как знакомые, так и новые злодеи, конечно, придется изрядно попотеть, дабы городу ничего более не угрожало.",
  },
  {
    image: "https://cdn.shazoo.ru/641523_TKny0u1_3.jpg",
    title: ["Assassin's Creed: Mirage"],
    genres: ["Экшен", "Стелс", "От третьего лица"],
    price: 3748,
    video: "https://video.playground.ru/344855-720.mp4",
    id: 2,
    description:
      "Ответвления франшизы Assassin's Creed без RPG-элементов и с акцентом на стелсе. Вам предстоит отправиться в древний Багдад и взять под своё управление вора по имени Басим.",
  },
  {
    image:
      "https://infinitestart.com/wp-content/uploads/2021/11/Saints-Row-reboot-delayed.jpg",
    title: ["Saints Row (2022)"],
    genres: ["Экшен", "Адвенчура", "Шутер", "От третьего лица", "Открытый мир"],
    price: 4885,
    video: "https://video.playground.ru/313957-720.mp4",
    id: 3,
    description:
      "Перезапуск серии Saints Row. Добро пожаловать в Санто-Илесо — вымышленный город на американском юго-западе. Группа молодых друзей, живущих в мире, полном преступлений, запускает своё собственное криминальное предприятие, стремясь достигнуть самой вершины успеха. Создайте босса своей мечты с помощью самого обширного набора настроек персонажа в серии, а затем дополните его образ разнообразными вариантами оружия и транспортных средств. Захватывайте квартал за кварталом, ведите войну против вражеских группировок и укрепляйте свою власть на улицах с помощью изощрённых преступных авантюр. Для путешествия по городской и пустынной местности вы можете использовать разнообразный транспорт, куда входят автомобили, мотоциклы, самолёты, вертолёты, СВВП (самолёт вертикального взлёта и посадки), ховербайки, ховерборды и картинги.",
  },
  {
    image:
      "https://cq-esports.com/storage/uploads/images/1039766/1607445716041.png",
    title: ["Cyberpunk 2077"],
    genres: [
      "Экшен",
      "Ролевая",
      "От первого лица",
      "Открытый мир",
      "Киберпанк",
    ],
    price: 3419,
    video: "https://video.playground.ru/220233-720.mp4",
    id: 4,
    description:
      "Киберпанковая ролевая игра от CD Projekt RED, которая базируется на фундаменте одноименной настольной ролевой игры за авторством Майка Пондсмита, принимавшего непосредственное участие в творческом процессе.",
  },
  {
    image:
      "http://squarefaction.ru/files/game/17310/gallery/20211209141858_5c367e60.jpg",
    title: ["Lies Of P"],
    genres: ["Экшен", "От третьего лица"],
    price: 2252,
    video: "https://video.playground.ru/320574-720.mp4",
    id: 5,
    description:
      "Пиноккио просыпается на заброшенной железнодорожной станции в Крате — городе, охваченном безумием и жаждой крови. Перед ним лежит единственная записка, которая гласит: «Найдите мистера Джеппетто. Он здесь, в городе».",
  },
  {
    image:
      "https://res.allmacwallpaper.com/get/iMac-27-inch-4K-Retina-wallpapers/harkyn-lords-of-the-fallen-8k-5120x2880/23283-12.jpg",
    title: ["The Lords of the Fallen"],
    genres: ["Экшен", "Ролевая", "От третьего лица"],
    price: 1154,
    video: "https://video.playground.ru/320574-720.mp4",
    id: 6,
    description:
      "Пиноккио просыпается на заброшенной железнодорожной станции в Крате — городе, охваченном безумием и жаждой крови. Перед ним лежит единственная записка, которая гласит: «Найдите мистера Джеппетто. Он здесь, в городе».",
  },
];

const HomePage = () => {
  return (
    <>
      <div className={styles.homePage}>
        {GAMES.map((game) => (
          <GameItem game={game} key={game.id} />
        ))}
      </div>
    </>
  );
};

export default HomePage;

// todo https://youtu.be/q6qbBbFk4w4?list=PL1EApzIeyBXY4JOnYkusYnb1dM3mP3ojN&t=52
