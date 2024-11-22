import Button from "@components/button/button";

describe("<Button />", () => {
    it("renders, receives styles props and can handle click", () => {
        const handleClick = cy.stub().as("handleClick");
        cy.mount(
            <Button onClick={handleClick} className="px-2" radius="14px">
                Button
            </Button>
        );
        cy.get("button").should("have.text", "Button");
        cy.get("button").should("have.class", "px-2");
        cy.get("button")
            .should("have.css", "border-radius", "14px")
            .and("have.css", "height", "50px");
        cy.get("button").click();
        cy.get("@handleClick").should("have.been.calledOnce");
    });
});
