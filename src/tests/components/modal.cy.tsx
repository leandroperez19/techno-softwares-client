import Button from "@/components/button/button";
import Modal from "@/components/modal/modal";

describe("<Modal>Modal Test</Modal>", () => {
    it("renders, and hide once the close function is called by clicking the background", () => {
        const handleClose = cy.spy().as("onCloseSpy");

        cy.mount(<Modal closeModal={handleClose}>Modal Test</Modal>);
        cy.get("[data-test-id=modal-background-touchable]").click({
            force: true,
        });
        cy.get("@onCloseSpy").should("have.been.called");
        cy.wait(300);
        cy.get("[data-test-id=techno-modal]").should("not.be.visible");
    });

    it("can be closed with a button within it that must have the attribute modal-close-button=value", () => {
        const handleClose = cy.spy().as("onCloseSpy");

        cy.mount(
            <Modal closeModal={handleClose}>
                <Button modal-close-button="modal">close</Button>
            </Modal>
        );

        cy.get("[modal-close-button=modal]").click();
        cy.wait(1000);
        cy.get("[data-test-id=techno-modal]").should("not.be.visible");
    });
});
