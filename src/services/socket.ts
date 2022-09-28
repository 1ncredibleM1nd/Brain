import { makeAutoObservable } from "mobx";
import { io } from "socket.io-client";
import { rootStore } from "@/stores";

export class Sockets {
  socket = io(`${process.env.VITE_APP_SOCKET_URL}`, {
    transports: ["websocket"],
    autoConnect: false,
  });

  constructor() {
    makeAutoObservable(this);
  }

  init = () => {
    this.socket.on("connect", () => {
      this.socket.emit("join"); // Необходимо дописать, когда настроятся сокеты
    });

    this.socket.on("joined", async () => {});
    this.socket.connect();
  };
}

export const socketService = new Sockets();
