// Select sidebar and toggle button
const sidebar = document.querySelector(".sidebar");
const sidebarToggler = document.querySelector(".sidebar-toggler");

// Ensure elements exist before proceeding
if (sidebar && sidebarToggler) {
    // Toggle sidebar collapsed state
    sidebarToggler.addEventListener("click", () => {
        sidebar.classList.toggle("collapsed");

        // Toggle aria-expanded attribute for accessibility
        const isExpanded = sidebar.classList.contains("collapsed") ? "false" : "true";
        sidebarToggler.setAttribute("aria-expanded", isExpanded);
    });
}
