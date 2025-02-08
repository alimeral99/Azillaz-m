const cardData = [
  {
    id: 1,
    title: "Passat 2019 model temiz",
    categories: "vasıta",
    price: "5000",
    acilIlan: true,
    city: "adana",
    img: "https://s3-alpha-sig.figma.com/img/7afa/753c/2e6faa71eaf609f2faae2e641194008f?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ZdAqr80YJaFE9PSi~aWr4Yg1HwedOzSwAPDu~LRiWEZUzh2sxud26RaGf~~A~nKmg-bACL20LzaFgsCGQkY958a79-tG9d4vrMDy1BzD1f9tqJMbPEU8nShLhUTx8rDabdPI10sms2gP3QwislAyfGEyLKl~xIp1Y9PekT6rIb-tTzXYWfNNmVY9CR2jknc8EZxeKhICGYrj7-E0Mxrg3TEug16TMLFeCwCeKpxuMPAfyA1gRN5uGRULJc~VYYrsMwDFzv7sXLnOdIhXYpr~rwSIOShUaZaQIHetNWff36QRtBLXAtOkeE0VxV7kZhtoLcvfdaccQqMuXgubs9ps1Q__",
  },
  {
    id: 2,
    title: "hisar dan atakum da fı..",
    categories: "emlak",
    price: "80000",
    yeniIlan: true,
    city: "çanakkale",
    img: "https://s3-alpha-sig.figma.com/img/8885/39b7/e313df2e274d43482c35062f3c1911ce?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=eu3kQW8Rb~-s0BjAT4YcdkoRw49ylUt7nlocbNYALM3HlIgMS4BOciulbjsw2XQdHo6DhGJb3hU0lcJHke5TashqKMexvK4FgEC2kPQjLa8LWQG0xj9fPsYfLAKgjwbWalJwvz8OQ1advpPZmPd3wKo6eC2~q9uxjhU7QWJy1q0V7lKpw1EQ~iLGLBqNt3mCN4d~hiNS2NRR2dtIPO64C4E6hm4edKCkSs9KRsCKj9ULxi3bFkLPhuH2RuaKjMB4x1o~2a6D2xRpUQplP4lUKd5dUSqNRicAQ~d-Rw7tA97BRclx0QoJMurz83oJBojU1xqdVs4MxDHErxltVL2sYg__",
  },

  {
    id: 3,
    title: "emlak",
    categories: "Hedef Ten Pelitliköy Tra...",
    price: "950",
    city: "edirne",
    img: "https://s3-alpha-sig.figma.com/img/bd41/c73d/c591aab2e767ab1c63096dc86dcd5ff3?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=aF9WJkGXMit83yZ~WnkomUHxt5xYuTj~anNhls1uUy1LigzXUC~F5VT13-clwDUSiRMX9OdZkHKJI0iPCgTB3hQHkqUQ4NhlvqaVm0jvTfVKiteG00GlDK2TZZZh2h126DyumBA-dMfcbtyC~pUn~RhGWPWCDKwoKq96OESoy5yug~~9-m83xKi7Lp2ABYDg25gFI51gtZbsL4qTCTni2ivlUzpGh4CGndi-ZcKxoy5sW8NelWmAl~AB1zE0lB9r3JtzwBi871Jv-pPiTcpd2Y7TI-cmW-gyIxuS5dqzGf6~A9yr2OzzxVzma5HVmlVVrGtmMa5f6UTx9KG0jFnV-Q__",
  },
  {
    id: 4,
    title: "Kia Rio 2006 1.5",
    categories: "vasıta",
    price: "1500",
    city: "trabzon",
    img: "https://s3-alpha-sig.figma.com/img/541e/adfd/dfc419cd2216854c10043289309562bc?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=mAOwpO9Ctje~IBKHrFqKl999TekqI-x-8-1EL0S7WZ4F1wkFIPIMB11EeJJgx8uLWb5VfBxgC4C7jPDkqExuRFQB~p170asrjVD3fTeIrldP9yu3TBeOrgXd9sYUif6nQl2iiIn--Y9ynYAjPuDeY6xSRe6tzW5UZ1Ok8DwRROdTaa-arJ82uXW2o4px3eIq~0mXaaCh0IjboUykg0CbZJKP2cevxQ4PwBt~NHr34PlXmwatoXzlLoUYIHRJRgzIbiT0q6n64nXEbCbCw4mBwZJt1Xuf3iJMgHzotCQps33XOEJmpRu2ohCx1TrXncSZ4E7XKnTopM50e1Z6nTrogQ__",
  },
  {
    id: 5,
    title: "Sanayi ve İş Makinleri",
    categories: "Electronics",
    price: "3500",
    city: "Kayseri  Melikgazi",
    img: "https://s3-alpha-sig.figma.com/img/d4c2/6990/401693f5c17530c8e54287f1661d05f4?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=aowpWsmzixBC5~7EtQm6pjc0Ze74LhyWocN39lo4xEuvBS9HgKx3LGJCwm9a0f0mD9l0EFchX0w30Kv-MkVa2xRlHF5f7k57XmnTvUQlo-9-TcQn1PBnzraVoFAYMw3hHpJDYyksDaxhxLIVHNHopB7KxoCJi584V3joGflzGC5~xlBA1mT~CRY3fgLhyu8OKiS1ptp1cs6s1UW6Ek5IiZT7T~2SPUuLopXMSP-xnp5UN0XLqtWNlZdfSxlaVfNPETLUZ0D9Kf~3PmavjKXlLss5BpzupImos4TAygvLYlehSxffqY8vxCXdNc2trg3hpyFUshZQ40t8A--cUfhOpQ__",
  },
  {
    id: 6,
    title: "1.5 Yas bebek dadısı",
    categories: "Hizmet",
    price: "900",
    city: "Samsun Çarşamba",
    img: "https://s3-alpha-sig.figma.com/img/a1ea/d2a9/98b6c3de8e6ce0cbfcfab1267d770106?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=DIT3DBwebb6bdbzZLNfZa0BjbegwxebBx2REwpdIRq2GiIxIFx1iJXbz9Q9g04kNEWCzKzYcOO3HdumllFyWIWPotbpgIHfluHltbLF0OK93KKztTX7l81SXx7aru4fT~PQZXSkFOa0Jk5kP91-Q96v~xjCwnEk6NRH5nHt7IH0M5WWR~RE~TENn0aZE4zPdr-Pee1od37U9PETAWKJUDeni5GjT-jhzRGR2KsMtH92sGLWrIW6Lhhf4K9rw2eDUvgvCgn7sq-PVCjzQxKIDpTrXEQGPYuLBcnqsCF4pz72Bwki7EYHZeL~OdfqxseiHgelmjfxDhi7qecHcPPlVHw__",
  },
];

export default cardData;
