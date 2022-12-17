"use client";

const CityForm = () => {
  return (
    <>
      <form>
        <input
          type="text"
          id="city"
          placeholder="enter your city"
          name="city"
        />
        <button type="button">Submit</button>
      </form>
      <span></span>
    </>
  );
};
export default CityForm;
