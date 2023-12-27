/**
 * sets the current page active on the sidebar
 */
function selectSidebar() {
    let currentPage = window.location.pathname;
    let idMappings = {
        '/Join/summary.html': ['id-0', 'idResponsive-0'],
        '/Join/board.html': ['id-1', 'idResponsive-1'],
        '/Join/task.html': ['id-2', 'idResponsive-2'],
        '/Join/contacts.html': ['id-3', 'idResponsive-3'],
        '/Join/legal_notice.html': ['id-4'],
        '/Join/privacy_policy.html': ['id-5'],
        '/Join/legal_notice_out.html': ['id-6'],
        '/Join/privacy_policy_out.html': ['id-7']
    };

    let ids = idMappings[currentPage];

    if (ids) {
        ids.forEach(id => {
            const sidebarItem = document.getElementById(id);
            sidebarItem.classList.add('active');
            sidebarItem.children[0].classList.add('active');
        });
    }
}