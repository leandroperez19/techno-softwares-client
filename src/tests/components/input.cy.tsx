import Input from "@/components/input/input";

describe("<Input label='Input' onChange={handleChange} labelFont='14px' labelFocusFont='10px'/>", () => {
    it("Renders, styles change on focus, can handle onChange and updates value", () => {
        const testValue = "testValue";
        const handleChange = cy.spy().as("onChangeSpy");

        cy.mount(
            <Input
                label="Input"
                onChange={handleChange}
                labelFont="14px"
                labelFocusFont="10px"
            />
        );
        cy.get("span.label").should("have.text", "Input");
        cy.get("span.label").should("have.css", "font-size", "14px");
        cy.get("input").focus();
        cy.get("span.label").should("have.css", "font-size", "10px");
        cy.get("input")
            .type(testValue, { force: true })
            .should("have.value", testValue);
        cy.get("@onChangeSpy").should("have.been.called");
        cy.get("@onChangeSpy").should(
            "have.been.calledWithMatch",
            Cypress.sinon.match({
                target: { value: testValue },
            })
        );
    });
});

describe("<Input error elevated label='Input' showStatusIcon/>", () => {
    it("Renders, label keeps elevated, and shows error status but no error message", () => {
        cy.mount(<Input error elevated label="Input" showStatusIcon />);
        cy.get("span.label").should("not.exist");
        cy.get("span.label-elevated").should("have.text", "Input");
        cy.get(".status-icon").should("be.visible");
    });
});

describe("<Input error showStatusIcon type='password'/>", () => {
    it("Renders, shows eye icon only on focus if value is not null, eye icon also change depending on state", () => {
        cy.mount(<Input error showStatusIcon type="password" />);
        cy.get(".status-icon").should("be.visible");
        cy.get(".eye-icon").should("not.be.visible");
        cy.get("input").focus();
        cy.get(".eye-icon").should("be.visible");
        cy.get(".status-icon").should("not.be.visible");
        cy.get(".eye-icon").click();
        cy.get("input").should("have.attr", "type", "text");
        cy.get(".eye-icon>svg").should(
            "have.attr",
            "data-testid",
            "VisibilityOutlinedIcon"
        );
        cy.get("input").focus();
        cy.get(".status-icon").should("not.be.visible");
        cy.get("input").type("123");
        cy.get(".eye-icon").should("exist").click();

        cy.get("input").should("have.attr", "type", "password");
        cy.get(".eye-icon>svg").should(
            "have.attr",
            "data-testid",
            "VisibilityOffOutlinedIcon"
        );
        cy.get("input").blur();
        cy.get(".status-icon").should("be.visible");
    });
});

describe("<Input showStatusIcons />", () => {
    it("Renders, if showStatusIcon is true but there's no errors nor success it shouldn't show status icons", () => {
        cy.mount(<Input showStatusIcon />);
        cy.get(".status-icon>svg").should("not.exist");
    });
});

describe("<Input error success showStatusIcons />", () => {
    it("Renders, and both success and error are true it shouldn't show any of 'em", () => {
        cy.mount(<Input success error showStatusIcon />);
        cy.get(".status-icon>svg").should("not.exist");
    });
});
