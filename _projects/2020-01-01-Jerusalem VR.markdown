---
layout: project
modal-id: 7
date: 2017-01-01
thumb: Jerusalem_VR_thumb.webp
img: Jerusalem_VR_01.webp
doimgs:
 - - Jerusalem_VR_02.webp
 - - Jerusalem_VR_03.webp
 - - Jerusalem_VR_04.webp
 - - Jerusalem_VR_05.webp
 - - Jerusalem_VR_06.webp
 - - Jerusalem_VR_07.webp
 - - Jerusalem_VR_08.webp
alt: image-alt
project-date: 2017-2020
client: Immersive History
category: VR
description: Recreating Jerusalem in VR as it stood at various historical periods was the biggest theme during my time at Immersive History.
notes:
 - To optimize the scenes for VR, as well as make it easier to add as much detail as possible, it was most effective to instance just a few distinct models around the scene.  Care had to be taken to construct the original objects to the correct dimensions so they would match up perfectly when instanced without leaving gaps or extending over edges.  This was especially true since many of the historical dimensions of the buildings were well established.
 - Other artists had worked on these scenes over time, but their models didn't always line up.  When the scenes were being assembled into their final forms I would modify assets where needed to make sure everything lined up properly.  This sometimes required readjusting UV layouts, improving instanced geometry and creating new details where needed.
 - Building models were provided by others on the team and I placed them in the city.  There are many different types ranging from stacked houses to small homes to large mansions.  Location in the city was important, but also making sure they sat nicely on the terrain and didn't intersect other buildings or landmarks in unrealistic ways.
 - We catered to different clients and provided VR applications suited to their needs.  This particular model was for <a href="https://wisdomintorah.com/" target="blank">"Wisdom in Torah Ministries"</a> that wanted accurate models of Jerusalem based on their archeological research.
 - They wanted the VR experience to run on an Oculus Quest, which meant it needed to be very light on memory consumption.  This again called for instancing as well as utilizing correct UV maps to be able to reuse textures as much as possible.  Instancing also allowed us to more easily create interactions in Unity where the developer had made scripts to easily assign actions to certain instanced models, such as doors and gates, and those actions would be automatically assigned when the model changed.
 - More detailed houses were also made for the main staircase where the player could walk and I was tasked with placing them convincingly along the sides of the stairs, making sure no doors were blocked and that none of the houses were floating or sitting in ways that would break the experience.
 - The city and temple mount were divided into sections and each section received its own dedicated LOD.  This made it possible to stream in different sections at higher fidelity when the player was in the area, as well as providing a nice scene overview when viewed as an overhead map.
---
