import { useContext } from 'react'
import { CyclesContext } from '../../context/CycleContext'
import { HistoryContainer, HistoryList, Status } from './styles'

export function History() {
  const { cycles } = useContext(CyclesContext)
  return (
    <HistoryContainer>
      <h1>Meu Histórico</h1>

      <pre> {JSON.stringify(cycles, null, 2)} </pre>

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
