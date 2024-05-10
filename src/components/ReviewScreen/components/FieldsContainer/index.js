import FieldCard from "../FieldCard";
import "./index.css";

function FieldsContainer({ cardList, selected, handleRemove, handleChecked }) {
  return (
    <div className="fields-container">
      {cardList?.map((item) => {
        let checked = selected.filter(i=>i.label === item.label)[0] ? true : false;
        return (
          <FieldCard
            key={item.label+item.value}
            item={item}
            checked={checked}
            handleChecked={()=>handleChecked(item)}
            handleRemove={()=>handleRemove({...item})}
          />
        );
      })}
    </div>
  );
}

export default FieldsContainer;
