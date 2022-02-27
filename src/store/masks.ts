export function maskBRL(value: number) {
  return ((value)/100)
    .toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
}

export function unmaskBRL(value: string) {
  return Number(value.replace(/[\D]+/g,''))
}
