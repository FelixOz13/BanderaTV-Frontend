export const getComments = async () => {
  return [
      {
      id: "1",
      body: "Hola Amigo Te presento esta Estacion de Musica llamada Bandera Musical es para ver videos",
      username: "  El Compa Felix",
     
      userId: "1",
      parentId: null,
      createdAt: "2022-03-13T23:00:33.010+02:00",
    },
    {
      id: "2",
      body: "Esa es la Intencion solo que la plataforma aun esta en proceso de Construcion!",
      username: " El Compa Felix",
      userId: "2",
      parentId: null,
      createdAt: "2022-03-13T23:00:33.010+02:00",
    },
    {
      id: "3",
      body: "Veo que puedes agregar comentarios y chatear con todos tus Artistas Favoritos",
      username: "Paisano",
      userId: "1",
      parentId: "1",
      createdAt: "2022-03-13T23:00:33.010+02:00",
    },
    {
      id: "4",
      body: "No hay problema , por ahorita solo son pocos los que la conocen , ahi que disfrutar videos por mientras terminan! JAJAJAJA",
      username: "Paisano",
      userId: "1",
      parentId: "2",
      createdAt: "2022-03-13T23:00:33.010+02:00",
      
    },
  ];
};

export const createComment = async (text, parentId = null) => {
  return {
    id: Math.random().toString(36).substr(2, 9),
    body: text,
    parentId,
    userId: "1",
    username: "El Compa Nuevo",
    createdAt: new Date().toISOString(),
  };
  
};

  



export const updateComment = async (text) => {
  return { text };
};

export const deleteComment = async () => {
  return {};
};