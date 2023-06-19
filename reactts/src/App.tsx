import { useRef, useState } from 'react';
import { MessagesInt } from './model';
import Message from './components/Message';

const App: React.FC = () => {
  const inputMessage = useRef<HTMLInputElement>(null)
  const [messData, setMessData] = useState<MessagesInt[]>([]);
 

  const handleSubmit = (e:any) => {
    e.preventDefault();

    if (inputMessage) {
      const mess:MessagesInt = {
        id: Math.round(Math.random() * Date.now()),
        message: inputMessage?.current?.value,
        date: Date.now()
      }

      setMessData((prevData) => [...prevData, mess]);
    }

    (document.getElementById("input-message") as HTMLInputElement).value = "";
  }

  return (
    <div>
      <h2>Poster un message</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" id="input-message" placeholder='Entrez votre message' ref={inputMessage} />
        <input type="submit" value="Envoyer" />
      </form>
      <h2>Liste des messages</h2>
      <div>{messData?.map((mess) => (
        <Message mess={mess} messData={messData} setMessData={setMessData} key={mess.id}/>
      ) )}</div>
    </div>
  );
};

export default App;