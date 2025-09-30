// Usuario
export interface Usuario {
  id_usuario?: number;
  nome: string;
  email: string;
  senha: string;
  telefone?: string;
  cpf?: string;
  perfil: string;
  status: boolean;
  created_at: string;
  updated_at: string;
}

// Endereco
export interface Endereco {
  id_endereco?: number;
  rua: string;
  numero: string;
  complemento?: string;
  bairro: string;
  cidade: string;
  estado: string;
  cep: string;
}

// Cliente
export interface Cliente {
  id_cliente?: number;
  nome: string;
  cpf?: string;
  cnpj?: string;
  tipo_cliente: string;
  email?: string;
  telefone?: string;
  endereco_id?: number;
  data_nascimento?: string;
  data_cadastro: string;
  sexo?: string;
  status: boolean;
  created_at: string;
  updated_at: string;
}

// Fornecedor
export interface Fornecedor {
  id_fornecedor?: number;
  razao_social: string;
  nome_fantasia?: string;
  cnpj?: string;
  email?: string;
  telefone?: string;
  endereco_id?: number;
  created_at: string;
  updated_at: string;
}

// Receita
export interface Receita {
  id_receita?: number;
  cliente_id?: number;
  descricao: string;
  valor: number;
  data_recebimento: string;
  forma_pagamento?: string;
  status: string;
  created_at: string;
  updated_at: string;
}

// Despesa
export interface Despesa {
  id_despesa?: number;
  cliente_id?: number;
  fornecedor_id?: number;
  descricao: string;
  valor: number;
  data_pagamento: string;
  forma_pagamento?: string;
  status: string;
  created_at: string;
  updated_at: string;
}

// ControleBanco
export interface ControleBanco {
  id_controle_banco?: number;
  banco: string;
  agencia: string;
  conta: string;
  tipo_conta: string;
  saldo_inicial: number;
  saldo_atual: number;
  status: boolean;
  titular?: string;
  cliente_id?: number;
  fornecedor_id?: number;
  created_at: string;
  updated_at: string;
}

// ControleCartao
export interface ControleCartao {
  id_controle_cartao?: number;
  banco_id: number;
  numero_cartao: string;
  limite_total: number;
  vencimento_fatura: string;
  created_at: string;
  updated_at: string;
}

// ControleConta
export interface ControleConta {
  id_controle_conta?: number;
  banco_id?: number;
  tipo: string;
  descricao: string;
  valor: number;
  vencimento: string;
  created_at: string;
  updated_at: string;
}

// ControlePagamento
export interface ControlePagamento {
  id_controle_pagamento?: number;
  conta_id: number;
  banco_id?: number;
  cartao_id?: number;
  data_pagamento: string;
  valor_pago: number;
  forma_pagamento?: string;
  observacoes?: string;
  status: string;
  created_at: string;
  updated_at: string;
}

// ControleContatoCliente
export interface ControleContatoCliente {
  id_controle?: number;
  cliente_id: number;
  usuario_responsavel_id?: number;
  data_contato: string;
  tipo_contato: string;
  descricao: string;
  retorno_agendado?: string;
  status_contato: string;
  created_at: string;
  updated_at: string;
}
