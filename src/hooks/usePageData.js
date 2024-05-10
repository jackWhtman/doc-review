import { useState } from "react";

export const usePageData = (initialPageData) => {
  const [selected, setSelected] = useState([]);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [confirmed, setConfirmed] = useState(false);
  const [pageData, setPageData] = useState(initialPageData);

  const handleSelectAll = () => {
    setSelected(pageData);
  };

  const handleChecked = (item) => {
    const selectedIndex = selected.findIndex(
      (selectedItem) => selectedItem.label === item.label
    );
    if (selectedIndex === -1) {
      setSelected([...selected, item]);
    } else {
      const updatedSelected = [...selected];
      updatedSelected.splice(selectedIndex, 1);
      setSelected(updatedSelected);
    }
  };

  const handleConfirm = () => {
    setConfirmed(true);
    setSelected([]);
    setShowConfirmationModal(false);
  };

  const handleCancel = () => {
    setShowConfirmationModal(false);
    setConfirmed(false);
  };

  const handleRemove = (item) => {
    setSelected(selected.filter((i) => i.label !== item.label));
    setPageData(pageData.filter((i) => i.label !== item.label));
  };

  return {
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
    setConfirmed,
  };
};
