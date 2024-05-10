import FieldsContainer from "../FieldsContainer";
import "./index.css";

function RightPanel({ data,selected,disabledSelectAll,handleSelectAll,onConfirm,handleRemove,handleChecked }) {
  
  return (
    <div className="right-panel">
      <div className="right-panel-title">Fields</div>
      <div className="right-panel-content">
          <FieldsContainer cardList={data} selected={selected} handleRemove={handleRemove} handleChecked={handleChecked}/>
      </div>
      <div className="right-panel-buttons">
        <button className="right-panel-button" disabled={disabledSelectAll} onClick={handleSelectAll} >Select All</button>
        <button className="right-panel-button" disabled={selected.length === 0} onClick={onConfirm}>Confirm</button>
      </div>
    </div>
  );
}

export default RightPanel;
