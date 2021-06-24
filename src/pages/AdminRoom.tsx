import { useParams } from 'react-router';
import logoImg from '../assets/images/logo.svg';
import deleteImg from '../assets/images/delete.svg';
import { Button } from '../componets/Button';
import { Question } from '../componets/Question';
import { RoomCode } from '../componets/RoomCode';
//import { useAuth } from '../hooks/useAuth';
import { useRoom } from '../hooks/useRoom';
//import { database } from '../services/firebase';
import '../styles/room.scss'
import { database } from '../services/firebase';

type RoomParams = {
  id: string;
}

export function AdminRoom () {
  //const { user } = useAuth();
  const params = useParams<RoomParams>();
  const roomId = params.id;
  const { title, questions } = useRoom(roomId);

  async function handleDeleteQuestion(questionId: string){
    if (window.confirm('Tem certeza que deseja excluir essa pergunta?')) {
      const questionRef = await database.ref(`rooms/${roomId}/questions/${questionId}`).remove();
    }
  }
  return (
    <div id="page-room">
      <header>
        <div className="content">
          <img src={logoImg} alt="Letmeask" />
          <div>
            <RoomCode code={roomId} />
            <Button isOutlined>Encerrar sala</Button>
          </div>
        </div>
      </header>
      <main>
        <div className="room-title">
          <h1>Sala {title}</h1>
          {questions.length > 0 && <span>{questions.length} pergunta(s)</span>}
        </div>

        <div className="question-list">
          {questions.map(question => {
            return (
              <Question
                key={question.id}
                content={question.content}
                author={question.author}
              >
                <button
                type="button"
                onClick={() => handleDeleteQuestion(question.id)}

                ><img src={deleteImg} alt="Remove pergunta" />
                </button>
              </Question>
            );
          })}
        </div>

      </main>
    </div>
  );
}