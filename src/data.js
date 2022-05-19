import React from "react";
import _default from "react-bootstrap/esm/Accordion";
import './data.css'
const handleClick = (title) => {
    console.log(`You clicked me! ${title}`);
};
<div>
<div className="body"></div>
<div className="idPHNo"></div>
</div>

export const columns = [
    
    {
        
    name: "Symbol",
    selector: "Symbol",
    sortable: true,
    },
{

    name: "Ask",
        selector: "Ask",
            sortable: true,
        
    },
{
    name: "Bid",
        selector: "Bid",
            sortable: true,
    },
{
    name: "LTP",
        selector: "LTP",
            sortable: true
},
{
    name: "Prevclose",
        sortable: true,
            selector: "Prevclose",
    },
{
    name: "Charge",
        selector: "Charge",
            sortable: true
},
{
    name: "Open",
        selector: "Open",
            sortable: true
},
{
    name: "High",
        selector: "High",
            sortable: true
},
{
    name: "Gainer",
        selector: "Gainer",
            sortable: true
},
{
    name: "Loser",
        selector: "Loser",
            sortable: true
},

];

export const data = [
    {
        id: 1,
        Symbol: "ADANIPORTS",
        Ask: 0,
        Bid: 759.9,
        LTP: 759.9,
        Prevclose: 769.9,
        Charge: -1.2,
        Open: 771,
        High: 784.95,
        // Gainer:
        // Loser 
    },
    {
        id: 2,
        Symbol: "ASIANPAINT",
        Ask: 0,
        Bid: 3053.65,
        LTP: 3053.65,
        Prevclose: 3053.65,
        Charge: -1.06,
        Open: 3090.4,
        High: 3109.55,
    },
    {
        id: 3,
        Symbol: "AUROPHARMA",
        Ask: 0,
        Bid: 584.4,
        LTP: 759.9,
        Prevclose: 769.9,
        Charge: -3.1,
        Open: 597,
        High: 607.55,
    },

    {
        id: 4,
        Symbol: "AXISBANK",
        Ask: 0,
        Bid: 672.35,
        LTP: 759.9,
        Prevclose: 769.9,
        Charge: 1.19,
        Open: 661.7,
        High: 676,
    },
    {
        id: 5,
        Symbol: "BAJAJ-AUTO",
        Ask: 0,
        Bid: 0,
        LTP: 759.9,
        Prevclose: 769.9,
        Charge: 0.55,
        Open: 3600,
        High: 3627.95,
    },
    {
        id: 6,
        Symbol: "BAJFINANCE",
        Ask: 0,
        Bid: 5807,
        LTP: 759.9,
        Prevclose: 769.9,
        Charge: -2.05,
        Open: 5957,
        High: 5996.6,

    },
    {
        id: 7,
        Symbol: "DLF",
        Ask: 0,
        Bid: 326.25,
        LTP: 759.9,
        Prevclose: 769.9,
        Charge: 2.05,
        Open: 322.1,
        High: 328.3,
    },
    {
        id: 8,
        Symbol: "EICHERMOT",
        Ask: 0,
        Bid: 2389.15,
        LTP: 759.9,
        Prevclose: 769.9,
        Charge: -1.09,
        Open: 2396.25,
        High: 2433.6,
    },
    {
        id: 9,
        Symbol: "HINDUNILVR",
        Ask: 0,
        Bid: 0,
        LTP: 759.9,
        Prevclose: 769.9,
        Charge: -0.78,
        Open: 2189.7,
        High: 2189.7,
    },
    {
        id: 10,
        Symbol: "ICICI BANK",
        Ask: 0,
        Bid: 714.2,
        LTP: 759.9,
        Prevclose: 769.9,
        Charge: 0.41,
        Open: 718,
        High: 719.8,
    },

    {
        id: 11,
        Symbol: "INFY",
        Ask: 0,
        Bid: 1526.75,
        LTP: 759.9,
        Prevclose: 769.9,
        Charge: -1.69,
        Open: 1549.95,
        High: 1549.95,
    },
];
