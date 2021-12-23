import React, { useState } from "react";
import '@coreui/coreui/dist/css/coreui.min.css'
import { CCard } from '@coreui/react'
import { CCardBody } from '@coreui/react'
import { CCardFooter } from '@coreui/react'
import { CCardGroup } from '@coreui/react'
import { CCardImage } from '@coreui/react'
import { CCardImageOverlay } from '@coreui/react'
import { CCardLink } from '@coreui/react'
import { CCardSubtitle } from '@coreui/react'
import { CCardText } from '@coreui/react'
import { CCardTitle } from '@coreui/react'
import { CRow } from '@coreui/react'
import { CCol } from '@coreui/react'
import { CButton } from '@coreui/react'
import { CCardHeader } from '@coreui/react'

const Recipes = () => {
    return (
      <div>
          <CRow xs={{ cols: 3, gutter: 4 }} md={{ cols: 5 }}>
            <CCol xs>
                <CCard>
                <CCardImage href="google.com" orientation="top" src="https://media.istockphoto.com/photos/varied-food-carbohydrates-protein-vegetables-fruits-dairy-legumes-on-picture-id1218254547?b=1&k=20&m=1218254547&s=170667a&w=0&h=mOEC7x7qU5NC78mCULs-jAPeLkxy8opOvIbGSnwmAyw=" />
                <CCardBody>
                    <CCardTitle>Recipe</CCardTitle>
                </CCardBody>
                <CCardFooter>
                    <small className="text-medium-emphasis">Ingredients</small>
                </CCardFooter>
                </CCard>
            </CCol>
            <CCol xs>
                <CCard>
                <CCardImage orientation="top" src="https://media.istockphoto.com/photos/varied-food-carbohydrates-protein-vegetables-fruits-dairy-legumes-on-picture-id1218254547?b=1&k=20&m=1218254547&s=170667a&w=0&h=mOEC7x7qU5NC78mCULs-jAPeLkxy8opOvIbGSnwmAyw=" />
                <CCardBody>
                    <CCardTitle>Recipe</CCardTitle>
                </CCardBody>
                <CCardFooter>
                    <small className="text-medium-emphasis">Ingredients</small>
                </CCardFooter>
                </CCard>
            </CCol>
            <CCol xs>
                <CCard>
                <CCardImage orientation="top" src="https://media.istockphoto.com/photos/varied-food-carbohydrates-protein-vegetables-fruits-dairy-legumes-on-picture-id1218254547?b=1&k=20&m=1218254547&s=170667a&w=0&h=mOEC7x7qU5NC78mCULs-jAPeLkxy8opOvIbGSnwmAyw=" />
                <CCardBody>
                    <CCardTitle>Recipe</CCardTitle>
                </CCardBody>
                <CCardFooter>
                    <small className="text-medium-emphasis">Ingredients</small>
                </CCardFooter>
                </CCard>
            </CCol>
            <CCol xs>
                <CCard>
                <CCardImage orientation="top" src="https://media.istockphoto.com/photos/varied-food-carbohydrates-protein-vegetables-fruits-dairy-legumes-on-picture-id1218254547?b=1&k=20&m=1218254547&s=170667a&w=0&h=mOEC7x7qU5NC78mCULs-jAPeLkxy8opOvIbGSnwmAyw=" />
                <CCardBody>
                    <CCardTitle>Recipe</CCardTitle>
                </CCardBody>
                <CCardFooter>
                    <small className="text-medium-emphasis">Ingredients</small>
                </CCardFooter>
                </CCard>
            </CCol>
            <CCol xs>
                <CCard>
                <CCardImage orientation="top" src="https://media.istockphoto.com/photos/varied-food-carbohydrates-protein-vegetables-fruits-dairy-legumes-on-picture-id1218254547?b=1&k=20&m=1218254547&s=170667a&w=0&h=mOEC7x7qU5NC78mCULs-jAPeLkxy8opOvIbGSnwmAyw=" />
                <CCardBody>
                    <CCardTitle>Recipe</CCardTitle>
                </CCardBody>
                <CCardFooter>
                    <small className="text-medium-emphasis">Ingredients</small>
                </CCardFooter>
                </CCard>
            </CCol>
            <CCol xs>
                <CCard>
                <CCardImage orientation="top" src="https://media.istockphoto.com/photos/varied-food-carbohydrates-protein-vegetables-fruits-dairy-legumes-on-picture-id1218254547?b=1&k=20&m=1218254547&s=170667a&w=0&h=mOEC7x7qU5NC78mCULs-jAPeLkxy8opOvIbGSnwmAyw=" />
                <CCardBody>
                    <CCardTitle>Recipe</CCardTitle>
                </CCardBody>
                <CCardFooter>
                    <small className="text-medium-emphasis">Ingredients</small>
                </CCardFooter>
                </CCard>
            </CCol>
            <CCol xs>
                <CCard>
                <CCardImage orientation="top" src="https://media.istockphoto.com/photos/varied-food-carbohydrates-protein-vegetables-fruits-dairy-legumes-on-picture-id1218254547?b=1&k=20&m=1218254547&s=170667a&w=0&h=mOEC7x7qU5NC78mCULs-jAPeLkxy8opOvIbGSnwmAyw=" />
                <CCardBody>
                    <CCardTitle>Recipe</CCardTitle>
                </CCardBody>
                <CCardFooter>
                    <small className="text-medium-emphasis">Ingredients</small>
                </CCardFooter>
                </CCard>
            </CCol>
            <CCol xs>
                <CCard>
                <CCardImage orientation="top" src="https://media.istockphoto.com/photos/varied-food-carbohydrates-protein-vegetables-fruits-dairy-legumes-on-picture-id1218254547?b=1&k=20&m=1218254547&s=170667a&w=0&h=mOEC7x7qU5NC78mCULs-jAPeLkxy8opOvIbGSnwmAyw=" />
                <CCardBody>
                    <CCardTitle>Recipe</CCardTitle>
                </CCardBody>
                <CCardFooter>
                    <small className="text-medium-emphasis">Ingredients</small>
                </CCardFooter>
                </CCard>
            </CCol>
            <CCol xs>
                <CCard>
                <CCardImage orientation="top" src="https://media.istockphoto.com/photos/varied-food-carbohydrates-protein-vegetables-fruits-dairy-legumes-on-picture-id1218254547?b=1&k=20&m=1218254547&s=170667a&w=0&h=mOEC7x7qU5NC78mCULs-jAPeLkxy8opOvIbGSnwmAyw=" />
                <CCardBody>
                    <CCardTitle>Recipe</CCardTitle>
                </CCardBody>
                <CCardFooter>
                    <small className="text-medium-emphasis">Ingredients</small>
                </CCardFooter>
                </CCard>
            </CCol>
            <CCol xs>
                <CCard>
                <CCardImage orientation="top" src="https://media.istockphoto.com/photos/varied-food-carbohydrates-protein-vegetables-fruits-dairy-legumes-on-picture-id1218254547?b=1&k=20&m=1218254547&s=170667a&w=0&h=mOEC7x7qU5NC78mCULs-jAPeLkxy8opOvIbGSnwmAyw=" />
                <CCardBody>
                    <CCardTitle>Recipe</CCardTitle>
                </CCardBody>
                <CCardFooter>
                    <small className="text-medium-emphasis">Ingredients</small>
                </CCardFooter>
                </CCard>
            </CCol>
            <CCol xs>
                <CCard>
                <CCardImage orientation="top" src="https://media.istockphoto.com/photos/varied-food-carbohydrates-protein-vegetables-fruits-dairy-legumes-on-picture-id1218254547?b=1&k=20&m=1218254547&s=170667a&w=0&h=mOEC7x7qU5NC78mCULs-jAPeLkxy8opOvIbGSnwmAyw=" />
                <CCardBody>
                    <CCardTitle>Recipe</CCardTitle>
                </CCardBody>
                <CCardFooter>
                    <small className="text-medium-emphasis">Ingredients</small>
                </CCardFooter>
                </CCard>
            </CCol>

            </CRow>
      </div>
    )
}  
export default Recipes;