import './DetailList.css';

const DetailList = ({selected, onSelected, onChangeMode}) => {
  // console.log(selected.flashcards);
  return (
    <div className="detail-list">
      <h2>{selected.name} </h2>
      <ul>
        {/* li요소를 이용하여 작성 */}
        {
          selected.flashcards.map((obj)=>{
            return <li key={obj.id}>· {obj.question}</li>
          })
        }
      </ul>
      <div className='btn'>
        <button onClick={() => onChangeMode(true)}>학습시작</button>
        <button onClick={() => onSelected(null)}>뒤로가기</button>
      </div>
    </div>
  );
};

export default DetailList;