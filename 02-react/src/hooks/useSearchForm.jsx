import { useState, useId } from "react"

export function useSearchForm({ onSearch, onTextFilter }) {
   const [isActive, setIsActive] = useState(false)
   const [technologyFilter, setTechnologyFilter] = useState('')
   const [locationFilter, setLocationFilter] = useState('')
   const [experienceFilter, setExperienceFilter] = useState('')
   const idText = useId()
   const idTechnology = useId()
   const idLocation = useId()
   const idExperience = useId()

   const handleSubmit = (event) => {
      event.preventDefault()
      const formData = new FormData(event.currentTarget)
      const filters = {
         search: formData.get(idText),
         technology: formData.get(idTechnology),
         location: formData.get(idLocation),
         experience: formData.get(idExperience)
      }
      onSearch(filters)
   }

   const handleFilterChange = (event) => {
      if (event.target.id === 'technology-filter') {
         setTechnologyFilter(event.target.value)
      }
      if (event.target.id === 'location-filter') {
         setLocationFilter(event.target.value)
      }
      if (event.target.id === 'experience-filter') {
         setExperienceFilter(event.target.value)
      }
   }

   const handleTextChange = (event) => {
      const text = event.target.value
      onTextFilter(text)
   }

   const handleFocus = () => {
      setIsActive(true)
   }

   const handleBlur = () => {
      setIsActive(false)
   }

   return {
      handleSubmit,
      handleFilterChange,
      handleTextChange,
      handleFocus,
      handleBlur,
      isActive,
      idText,
      idTechnology,
      idExperience,
      idLocation,
      technologyFilter,
      locationFilter,
      experienceFilter
   }
}