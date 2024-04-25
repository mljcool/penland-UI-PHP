const ifNoInstructor = (instructorName) => {
  const name = 'Instructor Not Assigned';
  if (instructorName) {
    return instructorName;
  }
  return name;
};

const ifNoStartDate = (dateStartParams) => {
  const dateStart = 'No confirmed starting date';
  if (dateStartParams) {
    return dateStartParams;
  }
  return dateStart;
};

const ifNoLevel = (level) => {
  const label = 'No predetermined level';
  if (label) {
    return label;
  }
  return label;
};

function IworkShopModel(workshopData = []) {
  if (!workshopData) {
    return workshopData;
  }
  return workshopData.map((_data) => {
    _data.workshopLevel = ifNoLevel(
        _data[
        'hso_workshoplevel@OData.Community.Display.V1.FormattedValue'
      ]
    );

    _data.instructor = ifNoInstructor(
        _data[
        '_hso_instructor_value@OData.Community.Display.V1.FormattedValue'
      ]
    );

    _data.startDate = ifNoStartDate(
        _data['mshied_startdate@OData.Community.Display.V1.FormattedValue']
    );

    //STUDIO

    _data.studioTitle =
    _data[
        'new_cr711_newtable_workshop_mshied_course.cr711_displaytitleofthestudio'
      ];

    _data.studioDescription =
    _data['new_cr711_newtable_workshop_mshied_course.new_description'];

    const hasStudio =
      _data[
        'new_cr711_newtable_workshop_mshied_course.new_studiotypes@OData.Community.Display.V1.FormattedValue'
      ];
    if (hasStudio) {
      _data.studioType = hasStudio.split('; ');
    } else {
      _data.studioType = [];
    }

    return _data;
  });
}
