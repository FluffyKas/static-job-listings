import jobListings from "../../data/data.json";
import "./Listings.scss";
import { SingleListing } from "../singe-listing/SingleListing";

export const Listings = () => {

  return (
    <div className="listings-container">
      {jobListings.map(listing => (
        <SingleListing listing={listing} />
      ))}
    </div>
  );
}