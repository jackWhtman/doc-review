import Preview from "./components/Preview";
import RightPanel from "./components/RightPanel";
import ConfirmationModal from "../ConfirmationModal";
import pages from "../../assets/pages.json";
import "./index.css";
import data from "../../assets/sections.json";
import { useState } from "react";
import { getRandomColor } from "../../utilFunctions/utils";
import { usePageData } from "../../hooks/usePageData";

function ReviewScreen() {
  const page = pages.data.documents[0].pages[0];
  const initialPageData = data.data.sections[0].children.map((child) => {
    let item = {};
    item.label = child.label;
    item.value = child.content.value;
    item.position = child.content.position;
    item.color = getRandomColor();
    return item;
  });

  const {
    selected,
    showConfirmationModal,
    confirmed,
    pageData,
    handleSelectAll,
    handleChecked,
    handleConfirm,
    handleCancel,
    handleRemove,
    setShowConfirmationModal,
  } = usePageData(initialPageData);

  return (
    <div>
      <div className="review-screen">
        <Preview
          imagePath={`${process.env.PUBLIC_URL}/pages/${page.image.url}`}
          highlights={selected}
        />
        <RightPanel
          data={pageData}
          selected={selected}
          disabledSelectAll={selected.length === pageData.length}
          handleSelectAll={handleSelectAll}
          onConfirm={() => setShowConfirmationModal(true)}
          handleRemove={handleRemove}
          handleChecked={handleChecked}
        />{" "}
        {showConfirmationModal && (
          <ConfirmationModal
            message="Are you sure you want to confirm the selected fields?"
            confirmButtonText="Confirm"
            cancelButtonText="Cancel"
            onConfirm={handleConfirm}
            onCancel={handleCancel}
          />
        )}
        {confirmed && (
          <ConfirmationModal
            message="Fields confirmed and processed successfully!"
            cancelButtonText="close"
            onCancel={handleCancel}
          />
        )}
      </div>
    </div>
  );
}

export default ReviewScreen;
