class Header {
    sideBarButton = () => cy.get('.sidebar-toggle');
    profileMenuLink = () => cy.get('[data-e2e="profile-menu"]');
    profileSettingsLink = () => cy.get('a').contains('Profile settings');
  }
    
module.exports = new Header();
