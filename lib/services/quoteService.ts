import { Endpoint } from "../constants/endpoints";
import { RequestType, ServiceConnection } from "../core/serviceClient";
import { CreateDirectQuoteRequest } from "../models/request/createDirectQuote";
import { CreateInverseQuoteRequest } from "../models/request/createInverseQuote";
import { ExecuteQuoteRequest } from "../models/request/executeQuote";
import { GetQuoteRequest } from "../models/request/getQuote";
import { GetQuotesRequest } from "../models/request/getQuotes";
import { Quote } from "../models/response/quote";

export class QuoteService {
  connection: ServiceConnection;

  constructor(connection: ServiceConnection) {
    this.connection = connection;
  }

  /**
   * https://apidoc.notbank.exchange/#getquotes
   */
  getQuotes(request: GetQuotesRequest): Promise<Quote[]> {
    return this.connection.nbRequest(
      Endpoint.QUOTES,
      RequestType.GET,
      request
    );
  }

  /**
   * https://apidoc.notbank.exchange/#createdirectquote
   */
  async createDirectQuote(request: CreateDirectQuoteRequest): Promise<String> {
    return (await this.connection.nbRequest(
      Endpoint.QUOTES_DIRECT,
      RequestType.POST,
      request
    ) as { id: string }).id;
  }

  /**
   * https://apidoc.notbank.exchange/#createinversequote
   */
  async createInverseQuote(request: CreateInverseQuoteRequest): Promise<String> {
    return (await this.connection.nbRequest(
      Endpoint.QUOTES_INVERSE,
      RequestType.POST,
      request
    ) as { id: string }).id;
  }

  /**
   * https://apidoc.notbank.exchange/#getquote
   */
  getQuote(request: GetQuoteRequest): Promise<Quote> {
    return this.connection.nbRequest(
      Endpoint.QUOTES + "/" + request.quote_id,
      RequestType.GET,
      request
    );
  }


  /**
   * https://apidoc.notbank.exchange/#executequote
   */
  executeQuote(request: ExecuteQuoteRequest): Promise<Quote> {
    return this.connection.nbRequest(
      Endpoint.QUOTES + "/" + request.quote_id,
      RequestType.POST,
      request
    );
  }
}
