
var selectedEvidence = [
    "",
    "",
    ""
];

var numSelectedEvidence = 0;
var DEBUG = false;

///////////////////////////////////////////////////////////////////////////////
//
///////////////////////////////////////////////////////////////////////////////
$(document).ready(function()
{
    // alert("Clicked - ");

    if (!DEBUG) $("#output").hide();

    $( function() {
        $("input:radio[name|='evidence']").checkboxradio({
            icon: false
        });
    });

    let mainDiv = $("#main");

    mainDiv.append($("<div></div>")
        .attr("id", "evidence"));

    let evidenceDiv = $("#evidence");

    evidenceDiv.append("<h2>Evidence</h2>");


    evidenceDiv.append($("<div></div>")
        .append($("<button></button>")
            .html("Reset")
            .attr("id", "button-evidence_reset")
            .click(evidenceResetClick)));

    $("#button-evidence_reset").button();

    createEvidenceRadio("evidence-1", "Evidence 1", evidenceDiv);
    createEvidenceRadio("evidence-2", "Evidence 2", evidenceDiv);
    createEvidenceRadio("evidence-3", "Evidence 3", evidenceDiv);

    mainDiv.append($("<div></div>")
        .attr("id", "ghost_results"));
    let resultsDiv = $("#ghost_results");

    resultsDiv.append("<h2>Results</h2>");
    let list = resultsDiv.append("<ul></ul>")
        .attr("id", "sortable");

    for (let i = 0; i < ghosts.length; ++i) {
        list.append(createGhostCard(ghosts[i]));
    }
    $("#sortable").sortable();
    $("#sortable").sortable("option", "disabled", true);
    // Set Radio Clicked Event Handler
    $("input:radio[name|='evidence']").change(evidenceClick);

});

///////////////////////////////////////////////////////////////////////////////
//
///////////////////////////////////////////////////////////////////////////////
function evidenceResetClick()
{ log("reset");
    $("input:radio[name|='evidence']:checked").prop("checked", false).checkboxradio("refresh");

    for (let i = 0; i < selectedEvidence.length; ++i) selectedEvidence[i] = "";
    numSelectedEvidence = 0;
    log("Evidence reset: + " + JSON.stringify(selectedEvidence));
    updateResults();
}

///////////////////////////////////////////////////////////////////////////////
//
///////////////////////////////////////////////////////////////////////////////
function evidenceClick()
{
    // 1. Set Evidence Global
    let regex = new RegExp("evidence-(\d+)");
    let name = $(this).attr("name");
    let results = name.match(/evidence-(\d+)/);
    let evidenceIndex = parseInt(results[1]) - 1;
    selectedEvidence[evidenceIndex] = $(this).val(); 
    ++numSelectedEvidence;
    log("value: " + $(this).val());
    log("Evidence updated: + " + JSON.stringify(selectedEvidence));

    updateResults();
}

///////////////////////////////////////////////////////////////////////////////
//
///////////////////////////////////////////////////////////////////////////////
function log(string)
{
    $("#output").append($("<p></p>")
        .addClass("debug")
        .html(string));
}

///////////////////////////////////////////////////////////////////////////////
//
///////////////////////////////////////////////////////////////////////////////
function updateResults()
{
    // 1. Select all ghost cards
    // iterate through and change classes to cross out and grey out evidence
    // that is selected
    // Hide cards that don't have required evidence
    $("div[id|='card']").each(function(index) {
        log("processing: " + ($(this).attr("id")));
        let matches = 0;
        $("li", this).each(function(index) {
            log("processing: " + ($(this).html()));
            if (selectedEvidence.includes($("span", this).html())) {
                $(this).addClass("crossed");
                ++matches;
            }
            else {
                $(this).removeClass("crossed");
            }
        });
        if (matches != numSelectedEvidence) {
            $(this).hide();
            log("hiding: " + $(this).attr("id"));
        }
        else {
            $(this).show();
        }
    });

}

///////////////////////////////////////////////////////////////////////////////
//
///////////////////////////////////////////////////////////////////////////////
function createEvidenceRadio(key, name, parent)
{
    let fieldset = $("<fieldset></fieldset>");
    fieldset.append($("<legend></legend>")
        .attr("id", "legend-" + key)
        .html(name));

    for (let i = 0; i < evidence_keys.length; ++i) {
        fieldset.append($("<div></div>")
            .append($("<label></label>")
                .attr("for", key + "-" + evidence_keys[i].key)
                .addClass("evidence_label")
                .html(evidence_keys[i].name))
            .append($("<input></input")
                .attr("type", "radio")
                .attr("name", key)
                .attr("id", key + "-" + evidence_keys[i].key)
                .attr("value", evidence_keys[i].key)
                .html(evidence_keys[i].name)));
    }
    parent.append(fieldset);
}

///////////////////////////////////////////////////////////////////////////////
//
///////////////////////////////////////////////////////////////////////////////
function createGhostCard(ghost)
{
    let card = $("<div></div>");
    card.attr("id", "card-" + ghost.name)
        .attr("class", "ghost_card")
        .append($("<legend></legend>")
            .attr("id", "legend_card-" + ghost.key)
            .html(ghost.name));
    let list = $("<ul></ul>")
        .attr("id", "list_card_evidence-" + ghost.key)
        .attr("class", "list_evidence");
    for (i = 0; i < ghost.evidence.length; ++i) {
        list.append($("<li></li>")
            .html(evidence_keys.find(evidence => evidence.key == ghost.evidence[i]).name)
            .append($("<span></span>")
                .html(evidence_keys.find(evidence => evidence.key == ghost.evidence[i]).key)
                .hide()));
    }
    card.append($("<div></div>")
        .addClass("list_ghost_evidence")
        .append(list));

    return card;
}



///////////////////////////////////////////////////////////////////////////////
//
///////////////////////////////////////////////////////////////////////////////
function populate()
{
    $("#blah").html("Hi");
}