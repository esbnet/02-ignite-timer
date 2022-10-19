import { HistoryContainer, HistoryList, Status } from './styles'

export function History() {
  return (
    <HistoryContainer>
      <h1>Meu Histórico</h1>
      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Início</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Tarefa</td>
              <td>30:00 minutos</td>
              <td>Há dois dias</td>
              <td>
                <Status statusColor="yellow">Em andamentos</Status>
              </td>
            </tr>
            <tr>
              <td>Tarefa</td>
              <td>30:00 minutos</td>
              <td>Há dois dias</td>
              <td>
                <Status statusColor="red">Em andamentos</Status>
              </td>
            </tr>
            <tr>
              <td>Tarefa</td>
              <td>30:00 minutos</td>
              <td>Há dois dias</td>
              <td>
                <Status statusColor="green">Em andamentos</Status>
              </td>
            </tr>
            <tr>
              <td>Tarefa</td>
              <td>30:00 minutos</td>
              <td>Há dois dias</td>
              <td>
                <Status statusColor="red">Em andamentos</Status>
              </td>
            </tr>
            <tr>
              <td>Tarefa</td>
              <td>30:00 minutos</td>
              <td>Há dois dias</td>
              <td>
                <Status statusColor="red">Em andamentos</Status>
              </td>
            </tr>
            <tr>
              <td>Tarefa</td>
              <td>30:00 minutos</td>
              <td>Há dois dias</td>
              <td>
                <Status statusColor="red">Em andamentos</Status>
              </td>
            </tr>
            <tr>
              <td>Tarefa</td>
              <td>30:00 minutos</td>
              <td>Há dois dias</td>
              <td>
                <Status statusColor="red">Em andamentos</Status>
              </td>
            </tr>
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}
