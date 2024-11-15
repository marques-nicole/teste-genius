// tipo Student
interface Student {
    id: number;
    name: string;
    status: 'presente' | 'ausente'; // Defina os status de acordo com a sua necessidade
}
//função para buscar os alunos ativos para chamada
export const getActiveStudents = async ():Promise<any>=> {
    try {
        const response = await fetch('url do endpoint', {
            method: 'GET',
        });

        const data = await response.json();

        // transformar a resposta do json numa lista de aluno

        if (response.ok) {
            //retornar a lista de aluno
        } else {
            alert('Erro ao buscar alunos para chamada. resposta não veio ok');
        }
        
    } catch (error) {
        console.error('Erro ao fazer chamada', error);
        alert('Erro ao buscar alunos para chamada');
    }
}

//função para receber a lista da chamada e filtrar só para os que vieram com status falso
function filterList(list: Student[]): Student[] {

  return list.filter((obj): boolean => {
    const isValid = !obj?.status;
    return isValid;
  });
}

//função para retornar a lista dos alunoss ausentes
export const sendAbsentStudents = async (absentStudents: Student[]): Promise<void> => {
    try {
        const response = await fetch('url do endpoint', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(absentStudents),
        });
        
    } catch (error) {
        console.error('Erro ao fazer login', error);
        alert('Erro ao retornar lista de alunos ausentes');
    }
}
