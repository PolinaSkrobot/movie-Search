import { Movie } from "./movie";

export interface ApiResponse{
  Search?: Array<Movie>,
  totalResults?: number,
  Response: boolean,
  Error?: string
}

