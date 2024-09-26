import { TonalButton } from "../components/ui/Buttons";
import { InputField } from "./../components/ui/InputField";
import AutocompleteField from "./../components/ui/AutocompleteField";
import { useState } from "react";
import DialogWrapper from "./../components/ui/DialogWrapper";
import DeleteDialog from "../components/ui/DeleteDialog";
import DataTable from "./../components/ui/DataTable";
import CustomToolbar from "./../components/ui/CustomToolbar";

const Homepage = () => {
  const [open, setOpen] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const handleClose = () => {
    setOpen(false);
    setOpenDelete(false);
  };
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
        <TonalButton size="large" onClick={() => setOpen(!open)} title="Open" />
        <TonalButton
          size="large"
          color="error"
          onClick={() => setOpenDelete(!openDelete)}
          title="Open Close"
        />
        <InputField label="Name" placeholder="Enter your name" />
        <AutocompleteField
          label="Movie"
          options={["Movie1", "Movie2", "Movie3"]}
        />

        <DialogWrapper
          title="Add Something"
          open={open}
          content={"hi"}
          handleClose={handleClose}
        />
        <DeleteDialog
          title="Delete"
          open={openDelete}
          handleClose={handleClose}
        />
      </div>
      <DataTable
        columns={columns}
        initialRows={division || []}
        toolbar={CustomToolbar}
      />
    </div>
  );
};

export default Homepage;
export const division = [
  {
    id: 1,
    countryName: "Bangladesh",
    divisionName: "Mymensingh",
    divisionNameBn: "ময়মনসিংহ",
    description: "Mymensingh",
  },
  {
    id: 2,

    countryName: "Bangladesh",
    divisionName: "Rangpur",
    divisionNameBn: "রংপুর",
    description: "Rangpur",
  },
  {
    id: 3,

    countryName: "Bangladesh",
    divisionName: "Sylhet",
    divisionNameBn: "সিলেট",
    description: "Sylhet",
  },
  {
    id: 4,

    countryName: "Bangladesh",
    divisionName: "Rajshahi",
    divisionNameBn: "রাজশাহী",
    description: "Rajshahi",
  },
  {
    id: 5,

    countryName: "Bangladesh",
    divisionName: "Khulna",
    divisionNameBn: "খুলনা",
    description: "Khulna",
  },
  {
    id: 6,

    countryName: "Bangladesh",
    divisionName: "Chattogram",
    divisionNameBn: "চট্টগ্রাম",
    description: "Chattogram",
  },
  {
    id: 7,

    countryName: "Bangladesh",
    divisionName: "Barishal",
    divisionNameBn: "বরিশাল",
    description: "Barishal",
  },
  {
    id: 8,

    countryName: "Bangladesh",
    divisionName: "Dhaka",
    divisionNameBn: "ঢাকা",
    description: "Dhaka",
  },
  {
    id: 9,

    countryName: "Bangladesh",
    divisionName: "Chattogram",
    divisionNameBn: "চট্টগ্রাম",
    description: "Chattogram",
  },
  {
    id: 10,

    countryName: "Bangladesh",
    divisionName: "Barishal",
    divisionNameBn: "বরিশাল",
    description: "Barishal",
  },
  {
    id: 11,

    countryName: "Bangladesh",
    divisionName: "Khulna",
    divisionNameBn: "খুলনা",
    description: "Khulna",
  },
  {
    id: 12,

    countryName: "Bangladesh",
    divisionName: "Chattogram",
    divisionNameBn: "চট্টগ্রাম",
    description: "Chattogram",
  },
  {
    id: 13,

    countryName: "Bangladesh",
    divisionName: "Dhaka",
    divisionNameBn: "ঢাকা",
    description: "Dhaka",
  },
];
const columns = [
  {
    field: "countryName",
    headerName: "Country Name",
    width: 200,
    editable: true,
  },
  {
    field: "divisionName",
    headerName: "Division Name",
    width: 200,
    align: "left",
    headerAlign: "left",
    editable: true,
    renderActionsCell: (row) => <p className="px-2">{row?.divisionName}</p>,
  },
  {
    field: "divisionNameBn",
    headerName: "Division Name Bn",
    width: 200,
    editable: true,
  },
];
