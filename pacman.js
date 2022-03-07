// <copyright file="pacman.js" company="MicroCODE Incorporated">Copyright © 2021 MicroCODE Incorporated Troy, MI</copyright><author>Timothy J. McGuire</author>

/*
 *      Title:    PacMen UI
 *      Module:   modules (MITxPRO-PacMenExercise:pacman.js)
 *      Project:  MicroCODE Version of MIT 'PacMen'
 *      Customer: Internal
 *      Creator:  MicroCODE Incorporated
 *      Date:     December 2021
 *      Author:   Timothy J McGuire
 *
 *      Designed and Coded: 2021,2022 MicroCODE Incorporated
 *
 *      This software and related materials are the property of
 *      MicroCODE Incorporated and contain confidential and proprietary
 *      information. This software and related materials shall not be
 *      duplicated, disclosed to others, or used in any way without the
 *      written of MicroCODE Incorported.
 *
 *
 *      DESCRIPTION:
 *      ------------
 *
 *      This module implements the MicroCODE JavaScript Class for 'ui'
 *      to implement the MIT 'PacMen' project.
 *
 *      This implements the Client-side, the 'FRONT END', the 'USER INTERFACE', or simply 'ui'.
 *
 *
 *      REFERENCES:
 *      -----------
 *
 *      1. Starter Code Repository (MIT XPRO: WEEK 7)
 *         PacMen Exercise
 *      2. My MIT 'Digital Trasnformation: Fire Hydrant' Project
 *         https://github.com/tjmcode/badbank-tjmcode.git
 *         This is a repository that holds my 'Bad Bank' project where i first learned 'Full Stack'
 *
 *
 *      MODIFICATIONS:
 *      --------------
 *
 *  Date:         By-Group:   Rev:     Description:
 *
 *  05-Mar-2022   TJM-MCODE  {0001}    New module based on my MIT Fire Hydrant assignment modified for 'PacMen'.
 *
 *
 *
 */
"use strict";

// ui is an object holding all our User Interface (UI) Elements off-screen ready to load into the 'game' DIV
var ui = {};

ui.blank =
    `<div>
    </div>`;

ui.default =
    `<div class="col-10">
     <div class="card-header"><h2>PacMen Controls</h2>
     <p>
                <button id="btnUI_Button1" class="btn-outline-info"
                        width='200'
                        height='30'>Add PacMan</button>
                <button id="btnUI_Button2" class="btn-outline-success"
                        width='200'
                        height='30'>Start Game</button>
                <button id="btnUI_Button3" class="btn-outline-warning"
                        width='200'
                        height='30'>Pause Game</button>
                <button id="btnUI_Button4" class="btn-outline-danger"
                        width='200'
                        height='30'>Stop Game</button>
    </p>
    </div>
    </div>`;

//// load*() -- UI functions that replace the HTML code of the 'game' DIV with the requested UI Element...

/**
 * Loads the default PacMen controls into the UI.
 *
 */
var loadDefaultControls = function ()
{
    controls.innerHTML = ui.default;
};

//// show*() -- UI functions to display results and errors to the User

/**
 * Removes the PacMen from the UI.
 *
 */
var showBlankcontrols = function ()
{
    controls.innerHTML = ui.blank;
};

/**
 * Returns a key's value unless 'undefined' in whcih case it returns ZERO (0)).
 *
 * @param {object} key field being accessed.
 */
var defaultZero = function (key)
{
    if ((typeof key === 'undefined') || (key == ""))
    {
        return 0;
    }
    else
    {
        return key;
    }
};

// Get Handles to the HTML elements...
var controls = document.getElementById('game');

// Start by showing nothing but the buttons'...
loadDefaultControls();