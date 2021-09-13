import BHTable from "../BHTable/BHTable";
import BHSidepanel from "../BHSidepanel/BHSidepanel";

const Businesshours = () => {
  return (
    <div>
      <h1 className="heading">Business Hours</h1>
      <div className="row">
        <div className="col-6">
          <BHTable></BHTable>
        </div>
        <div className="col-6">
          <BHSidepanel></BHSidepanel>
        </div>
      </div>
    </div>
  );
};

export default Businesshours;
