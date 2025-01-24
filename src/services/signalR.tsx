import { HubConnection, HubConnectionBuilder } from "@microsoft/signalr";
import { useEffect, useState } from "react";

export const useSignalR = () => {
  const [connectionRef, setConnection] = useState<HubConnection>();

  function createHubConnection() {
    const con = new HubConnectionBuilder()
      .withUrl("http://localhost:5000/test", {
        withCredentials: false,
        accessTokenFactory: async () => {
          return (await getAccesToken()) ?? "";
        },
      })
      .withAutomaticReconnect()
      .build();
    setConnection(con);
  }

  useEffect(() => {
    createHubConnection();
  }, []);

  useEffect(() => {
    if (connectionRef) {
      try {
        connectionRef
          .start()
          .then(() => console.log("Connected to SignalR hub"))
          .catch((err) => console.log("Error connecting to hub:", err));
      } catch (error) {
        console.log("error: ", error);
      }
    }

    return () => {
      connectionRef?.stop();
    };
  }, [connectionRef]);

  return connectionRef;
};
