export class GraphQLError extends Error {
  status?: number;
  url?: string;

  constructor(message: string, status?: number, url?: string) {
    super(message);
    this.name = "GraphQLError";
    this.status = status;
    this.url = url;
  }
}

export class NetworkError extends Error {
  status: number;
  url: string;

  constructor(message: string, status: number, url: string) {
    super(message);
    this.name = "NetworkError";
    this.status = status;
    this.url = url;
  }
}
