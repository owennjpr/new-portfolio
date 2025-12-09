import LinkButton from "../LinkButton";

function ExperienceThriftway() {
  return (
    <div className="glassBorder p-4">
      <div className="h-full flex flex-col justify-between">
        <div>
          <div className="flex flex-col items-center sm:flex-row sm:items-baseline gap-1 sm:gap-4">
            <h2 className="text-2xl sm:text-3xl">Thriftway</h2>
            <p className="text-lg">Cashier</p>
            <p className="">(06/2022 - 08/2022)</p>
          </div>
          <p className="text-sm sm:text-base text-center sm:text-start">
            I ran checkstands, bagged, and performed a variety of maintenance
            tasks at the Thriftway grocery store. I Maintained efficient and
            friendly service during hectic and high pressure periods.
          </p>
        </div>
        <div className="w-full flex flex-col sm:flex-row mt-4 gap-4 justify-center sm:justify-start">
          <LinkButton
            link="https://www.westseattlethriftway.com/"
            text="West Seattle Thriftway"
          />
        </div>
      </div>
    </div>
  );
}

export default ExperienceThriftway;
