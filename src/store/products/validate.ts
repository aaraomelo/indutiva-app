import {
  isValidUrl,
  required,
} from "../validations"

export function validate({ field, value }: any) {
 let messages = []
  switch (field) {
    case "title":
      !required(value.toString()) && messages.push("É necessário informar o título")
      return [...messages]

    case "image":
      !required(value.toString()) && messages.push("É necessário informar uma URL")
      !isValidUrl(value.toString()) && messages.push("Informe uma URL válida")
      return [...messages]

    case "value":
      !required(value.toString()) && messages.push("É necessário informar o preço")
      return [...messages]

    case "description":
      !required(value.toString()) && messages.push("É necessário informar a descrição")
      return [...messages]
    default:
      return []
  }
}
