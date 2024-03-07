import { PlansContact } from "components";
import Head from "next/head";

const DemoRequest = () => {
  const handleFormSubmit = (event) => {
    event.preventDefault();
    let mndFileds = new Array("Company", "Last Name");
    let fldLangVal = new Array("Company", "Last\x20Name");
    for (let i = 0; i < mndFileds.length; i++) {
      let fieldObj =
        document.forms["WebToLeads6076287000000984008"][mndFileds[i]];
      if (fieldObj) {
        if (fieldObj.value.replace(/^\s+|\s+$/g, "").length == 0) {
          if (fieldObj.type == "file") {
            alert("Please select a file to upload.");
            fieldObj.focus();
            return false;
          }
          alert(fldLangVal[i] + " cannot be empty.");
          fieldObj.focus();
          return false;
        } else if (fieldObj.nodeName == "SELECT") {
          if (fieldObj.options[fieldObj.selectedIndex].value == "-None-") {
            alert(fldLangVal[i] + " cannot be none.");
            fieldObj.focus();
            return false;
          }
        } else if (fieldObj.type == "checkbox") {
          if (fieldObj.checked == false) {
            alert("Please accept  " + fldLangVal[i]);
            fieldObj.focus();
            return false;
          }
        }
        try {
          if (fieldObj.name == "Last Name") {
            name = fieldObj.value;
          }
        } catch (e) {}
      }
    }
    let urlparams = new URLSearchParams(window.location.search);
    if (urlparams.has("service") && urlparams.get("service") === "smarturl") {
      let webform = document.getElementById("webform");
      let service = urlparams.get("service");
      let smarturlfield = document.createElement("input");
      smarturlfield.setAttribute("type", "hidden");
      smarturlfield.setAttribute("value", service);
      smarturlfield.setAttribute("name", "service");
      webform.appendChild(smarturlfield);
    }
    document
      .querySelector(".crmWebToEntityForm .formsubmit")
      .setAttribute("disabled", "true");
  };

  return (
    <>
      <div id="crmWebToEntityForm">
        <form
          id="webform"
          action="https://crm.zoho.com/crm/WebToLeadForm"
          name="WebToLeads6076287000000984008"
          method="POST"
          onSubmit={handleFormSubmit}
          accept-charset="UTF-8"
        >
          <>
            <input
              type="text"
            //   style={{ display: "none" }}
              name="xnQsjsdp"
              value="012b548c3b24b62256a2e7f695a15a778302fa6072e4023cc9cd74604d58b866"
            />
            <input
              type="text"
              style={{ display: "none" }}
              name="xmIwtLD"
              value="362cafca0b92efd91890fd2e46b2add6bb3d6d5e965343fb033da9dc0f6e9291b97ee79e757d1d223fbbf6d3a3dddcd5"
            />
            <input
              type="text"
              style={{ display: "none" }}
              name="actionType"
              value="TGVhZHM="
            />
            <input
              type="text"
              style={{ display: "none" }}
              name="returnURL"
              value="https://sleakops.com/demo-requested/"
            />{" "}
          </>
        </form>
      </div>
    </>
  );
};

export default DemoRequest;
