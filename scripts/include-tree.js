async function includeTree(filePath) {
  try {
    // Fetch the external HTML file
    const response = await fetch(filePath);
    if (!response.ok) {
      throw new Error("Failed to load content");
    }

    // Get the text content of the file
    const html = await response.text();

    // Add the content directly to the page
    const treeNavDiv = document.createElement("div");
    treeNavDiv.innerHTML = html;

    // Add the content to the tree container in the page
    const mainContainer = document.querySelector(".tree-contr");
    mainContainer.replaceWith(treeNavDiv.querySelector(".tree-nav-contr"));
  } catch (error) {
    console.error("Error loading HTML content:", error);
  }
}
