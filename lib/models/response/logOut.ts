export interface LogOutResponse {
  result: boolean; // Indica si el logout fue exitoso (true) o fallido (false)
  errormsg: string | null; // Mensaje de error, será null si fue exitoso
  errorcode: number; // Código del resultado (0 si es exitoso, otro valor si hubo error)
  detail: string | null; // Detalle adicional, generalmente es null
}
