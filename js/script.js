
var selectedEvidence = [
    "",
    "",
    ""
];

///////////////////////////////////////////////////////////////////////////////
//
///////////////////////////////////////////////////////////////////////////////
$(document).ready(function()
{
    // alert("Clicked - ");

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

    for (let i = 0; i < ghosts.length; ++i) {
        resultsDiv.append(createGhostCard(ghosts[i]));
    }

    // Set Radio Clicked Event Handler
    $("input:radio[name|='evidence']").change(evidenceClick);

});

///////////////////////////////////////////////////////////////////////////////
//
///////////////////////////////////////////////////////////////////////////////
function evidenceResetClick()
{
    log("reset");
    $("input:radio[name|='evidence']:checked").prop("checked", false).checkboxradio("refresh");

    for (let i = 0; i < selectedEvidence.length; ++i) selectedEvidence[i] = "";
    log("Evidence reset: + " + JSON.stringify(selectedEvidence));
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
    log("value: " + $(this).val());
    log("Evidence updated: + " + JSON.stringify(selectedEvidence));
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
            .html(evidence_keys.find(evidence => evidence.key == ghost.evidence[i]).name));
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