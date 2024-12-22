import React from "react";
import { Button } from "@mui/material";
import "./SearchPage.css";
import SearchResult from './SearchResult';

const SearchPage = () => {
    return (
        <div className="searchPage">
            <div className="searchPage_info">
                <p>62 stays · 26 august to 30 august · 2 guest</p>
                <h1>Stays nearby</h1>
                <Button variant="outlined">Cancellation Flexibility</Button>
                <Button variant="outlined">Type of place</Button>
                <Button variant="outlined">Price</Button>
                <Button variant="outlined">Rooms and beds</Button>
                <Button variant="outlined">More filters</Button>
            </div>
            <SearchResult
            img="data:image/jpeg;base64,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"
            location="Private room in center of London"
            title="Stay at this spacious Edwardian House"
            description="1 guest · 1 bedroom · 1 bed · 1.5 shared bathrooms · Wifi · Kitchen"
            star={4.73}
            price="£30 / night"
            total="£117 total"
            />
        </div>
    );
};

export default SearchPage;