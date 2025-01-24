const messages = [
  {
    id: "009a3e76-a2d9-48ca-9b89-80865d4c4f94",
    userId: "ee505d89-48c0-4799-a442-79e85b33adfa",
    name: "test1",
    messages: [
      {
        isClientMessage: true,
        id: "1",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dapibus vitae justo consequat gravida. Morbi scelerisque, ligula nec laoreet condimentum, est neque tincidunt turpis, sit amet efficitur lacus neque eget elit. Etiam iaculis interdum ligula ut tempus. Suspendisse non magna id lacus iaculis auctor. Cras luctus ac metus eu tempus. Fusce ac interdum sapien. Pellentesque at dolor rutrum, placerat elit ac, suscipit enim. Fusce auctor, lectus id molestie imperdiet, enim turpis convallis odio, non eleifend mauris lacus ut tortor. Maecenas quis neque non lacus elementum consequat. Nullam et tincidunt ipsum. Donec dignissim dui ac justo dapibus mattis. Ut ullamcorper efficitur nisi non molestie. Duis finibus efficitur quam a pharetra. Vivamus venenatis, erat vel egestas porta, quam lectus accumsan sapien, eu auctor eros leo vel augue. Suspendisse aliquam blandit purus eu mollis.",
      },
      {
        isClientMessage: false,
        id: "2",
        text: "Maecenas placerat ac diam ac malesuada. Suspendisse potenti. Nullam interdum sodales elementum. Praesent porta leo magna. Aliquam non orci eleifend, ultricies enim et, vestibulum tortor. Nullam nec iaculis turpis, viverra cursus libero. Integer interdum tincidunt magna, quis volutpat ante elementum at.",
      },
      {
        isClientMessage: true,
        id: "3",
        text: "Morbi suscipit, orci eu pellentesque pulvinar, augue sem dapibus ex, non auctor nibh augue id risus. Proin faucibus, neque in lobortis condimentum, eros lectus commodo purus, ac auctor magna lorem quis sapien. Fusce quis leo at odio pretium iaculis et et enim. Maecenas in erat id urna placerat suscipit vitae eget nibh. Curabitur id laoreet justo. Praesent dolor mauris, fringilla quis velit sit amet, feugiat aliquam nulla. Nam justo massa, commodo vel nisi a, fringilla tristique mauris. Nullam eget molestie justo.",
      },
      {
        isClientMessage: false,
        id: "4",
        context: [
          {
            text: "test text from source",
            fileName: "file.doc",
            score: 1,
            createdDate: "2024-05-13",
            modifiedDate: "2024-05-14",
          },
        ],

        text: "Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi velit purus, rutrum vitae arcu nec, vehicula pellentesque velit. Aliquam fermentum lorem non leo porttitor iaculis. Etiam eleifend orci non orci rhoncus accumsan. Aliquam commodo neque lacus, nec suscipit lacus condimentum nec. Nunc sollicitudin facilisis orci vitae convallis. Donec lectus est, fermentum nec commodo ut, commodo nec ipsum. Vivamus justo sapien, commodo id lacinia ut, gravida ut ipsum. Maecenas non arcu mollis, feugiat risus feugiat, condimentum ante. Aenean tincidunt nisl eget quam malesuada, nec fermentum nunc maximus.",
      },
    ],
  },
  {
    id: "81239186-fe40-4a67-8684-426c071fd457",
    userId: "ee505d89-48c0-4799-a442-79e85b33adfa",
    name: "test2",
    messages: [
      {
        isClientMessage: true,
        id: "1",
        text: "Sed nibh nisi, scelerisque at bibendum sit amet, aliquet viverra arcu. Nulla eu ultrices sapien. Fusce ligula mi, pulvinar quis pellentesque eget, congue id libero. Morbi hendrerit a urna at sagittis. Nullam pulvinar volutpat turpis, at elementum urna porttitor vel. Mauris id scelerisque eros. Donec tincidunt tortor eros, sit amet vulputate turpis consequat non.",
      },
      {
        isClientMessage: false,
        id: "2",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed facilisis nisl, at vestibulum diam. Proin rhoncus ipsum quis urna mattis dignissim. Ut ultrices tincidunt est vel volutpat. Cras vel finibus diam. Nunc gravida suscipit arcu vitae dapibus. Praesent efficitur condimentum lacus quis iaculis. Proin tempor, neque non venenatis congue, nunc mi mattis mi, vel posuere mauris ipsum nec dolor.",
      },
    ],
  },
  {
    id: "742e48fd-f268-45cd-9faf-70ece5ba0bf9",
    userId: "ee505d89-48c0-4799-a442-79e85b33adfa",
    name: "test3",
    messages: [
      {
        isClientMessage: true,
        id: "1",
        text: "Quisque quis metus at risus pretium scelerisque sed vel lorem. Pellentesque auctor eros vel imperdiet cursus. Integer at nisl lectus. Fusce pulvinar pharetra leo sit amet pretium. Nunc elementum efficitur eros, non posuere eros pharetra at. Aenean interdum eros at pretium aliquet. Curabitur ut dolor pellentesque diam convallis mattis et sed elit. Vestibulum eleifend urna et massa ultrices, id facilisis lorem eleifend. Pellentesque pellentesque ac justo et rutrum. Aliquam mi urna, faucibus non efficitur et, semper id arcu. Suspendisse fringilla, massa ut vestibulum interdum, felis odio suscipit nibh, non viverra leo lacus sed eros. Vivamus venenatis, nulla sed facilisis fermentum, dolor mi facilisis nibh, eget condimentum tellus orci vitae ipsum.",
      },
      {
        isClientMessage: false,
        id: "2",
        text: "Vestibulum sit amet mauris vitae neque aliquet tempor. Cras faucibus posuere mollis. Morbi rutrum, turpis ut volutpat placerat, dui elit accumsan velit, at ultrices ligula sem in felis. Sed eu suscipit massa. Aliquam porttitor urna sed lorem fermentum dignissim. Nam libero neque, vehicula at est a, efficitur pharetra ipsum. Aliquam efficitur ultricies turpis, ac interdum dolor aliquet quis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur eleifend ligula vel nisi aliquet, nec mattis eros placerat. Sed non eros sed risus maximus congue in placerat ante.",
      },
      {
        isClientMessage: true,
        id: "3",
        text: "Suspendisse eget dignissim eros. Etiam semper pharetra nunc id facilisis. Nullam et dui commodo, tincidunt justo sit amet, imperdiet libero. Sed eu sollicitudin orci. Nunc convallis interdum leo. Vivamus nec porttitor nulla, id laoreet elit. Aenean quis tempor risus.",
      },
      {
        isClientMessage: false,
        id: "4",
        text: "Suspendisse tempor non velit a pellentesque. Mauris convallis vel orci sit amet dignissim. Sed vulputate nisi sed elit maximus, vitae convallis mi consectetur. Phasellus congue turpis dolor, sed volutpat ex ullamcorper eu. Nulla ultrices odio maximus lorem lacinia, eu condimentum nisi hendrerit. Nullam id semper tellus, quis porttitor mauris. Nullam et quam quis nunc pharetra ultrices. Vivamus a odio ac risus finibus faucibus ut eget lectus. Nunc convallis ante nunc, a fermentum mauris hendrerit nec. Donec ac ante odio. Morbi vitae mi nulla. Integer egestas nisl vitae lectus ornare dictum. Integer efficitur ligula ut mi viverra interdum.",
      },
      {
        isClientMessage: true,
        id: "5",
        text: "Aliquam vel commodo tortor, vel imperdiet velit. Sed pulvinar odio id auctor faucibus. Maecenas lacus justo, hendrerit at sem vitae, egestas mollis tortor. Quisque feugiat accumsan dolor, ac efficitur nisl ullamcorper in. Nulla aliquam mi erat, nec semper tellus hendrerit in. Sed in libero velit. Curabitur ex neque, fringilla vel ultrices vel, elementum eu lectus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur placerat semper mauris. Curabitur vehicula elementum neque, vel eleifend eros feugiat a. Proin interdum urna in efficitur convallis. Curabitur placerat faucibus mauris ac maximus. Mauris at volutpat mauris. In commodo sapien suscipit ante rhoncus placerat. Nam tincidunt neque erat, sed laoreet nibh pellentesque et.",
      },
      {
        isClientMessage: false,
        id: "6",
        text: "In tempor orci nec mauris posuere, ac mattis ligula rhoncus. Proin vel leo vehicula, iaculis purus vitae, venenatis tellus. Vestibulum dignissim scelerisque augue. Nam luctus libero eu velit laoreet, ut consequat erat pellentesque. Phasellus tincidunt libero eget ante vestibulum faucibus. Vestibulum pharetra dictum laoreet. Cras eu diam condimentum, eleifend nulla et, malesuada est. Aenean ultrices sodales dignissim. Praesent placerat interdum accumsan. Pellentesque ultrices ipsum leo, id tincidunt risus tincidunt viverra. Aenean in eros sed lorem porta feugiat sit amet a lectus.",
      },
      {
        isClientMessage: true,
        id: "7",
        text: "Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras sit amet dolor quis urna faucibus feugiat nec ut sem. Duis luctus sodales est ac iaculis. Donec fermentum, metus sit amet scelerisque aliquam, ligula nulla efficitur libero, et ornare lorem nunc nec tellus. Donec euismod at sem sed malesuada. Nullam a tempus libero, vitae eleifend neque. Pellentesque elementum feugiat rhoncus. Integer quis finibus leo. Fusce quam odio, fermentum at neque sit amet, bibendum iaculis lacus. Maecenas vel massa a quam hendrerit varius non aliquet nisi. Curabitur imperdiet, nulla vel mattis tincidunt, odio sem imperdiet arcu, eu convallis lacus felis nec tellus. Sed ac iaculis libero, ac hendrerit sem. Nam cursus a quam eget egestas. Nam tincidunt massa quis erat finibus placerat.",
      },
      {
        isClientMessage: false,
        id: "8",
        text: "Curabitur interdum tempor lacus, non interdum ex aliquam at. Suspendisse at finibus purus. Ut eget ultrices urna. Etiam mollis velit non arcu lacinia vulputate. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus luctus dictum arcu quis dictum. Etiam ipsum nisl, convallis et risus ac, cursus aliquam diam. Nunc eros nisi, posuere iaculis interdum in, blandit vel nibh. Maecenas hendrerit eleifend risus, eu rutrum eros consectetur sit amet. In tempor faucibus urna, ac dapibus mauris auctor non. Nulla sollicitudin aliquam sem non posuere. Vivamus quis tincidunt quam. Sed eget sagittis felis. Nullam sit amet ante sit amet leo laoreet interdum.",
      },
      {
        isClientMessage: true,
        id: "9",
        text: "Integer eros ex, cursus eget pretium sit amet, tincidunt at quam. In tincidunt mauris est, sit amet elementum eros blandit at. Etiam placerat metus vitae feugiat rutrum. In dapibus massa eu lacus tempus, in condimentum tortor semper. Quisque hendrerit pharetra ipsum, a mollis lorem interdum vel. Sed aliquam leo dui, ac maximus nibh hendrerit ac. Phasellus quis nunc eget dui tincidunt dictum. Donec auctor lacus ante, sed venenatis tellus scelerisque quis.",
      },
      {
        isClientMessage: false,
        id: "10",
        text: "Mauris laoreet arcu a lacus tristique bibendum. Nunc eu laoreet purus, ac mattis velit. Fusce a maximus quam. Phasellus eget pharetra velit. Nulla viverra tempor nulla. In hac habitasse platea dictumst. Phasellus risus ex, sollicitudin sed massa vitae, posuere feugiat felis. Vestibulum sollicitudin felis ornare nisl pellentesque, vel commodo purus sagittis. Sed porttitor nunc augue, at bibendum tellus congue at. Aenean pretium metus in bibendum lobortis. Cras consectetur libero ac auctor sollicitudin.",
      },
      {
        isClientMessage: true,
        id: "11",
        text: "Quisque nisi odio, scelerisque quis elementum eu, faucibus non tellus. Morbi tempus massa ex, eu euismod purus mollis non. Pellentesque elementum, sem at finibus sodales, sapien nibh venenatis quam, a tempor lacus ligula nec enim. Quisque tempor, eros vitae viverra faucibus, ante nunc pulvinar erat, eget suscipit tortor justo quis magna. Ut quis mauris sed tellus mattis malesuada a eu ipsum. Proin eget venenatis nisl. Praesent in porttitor nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Suspendisse accumsan erat sed ultrices finibus. Maecenas est ante, ullamcorper sit amet semper id, ultrices ultricies orci. Vivamus aliquet sapien vitae ligula dictum, id finibus mi vehicula.",
      },
      { isClientMessage: false, id: "12", text: "how are you?" },
      { isClientMessage: true, id: "13", text: `I'm ok, thanks` },
    ],
  },
];

export default messages;
