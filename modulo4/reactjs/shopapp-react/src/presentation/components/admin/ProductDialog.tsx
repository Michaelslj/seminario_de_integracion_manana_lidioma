// src/presentation/components/admin/ProductDialog.tsx

import { useAdminStore } from '@/presentation/store/admin.store'
import { useState } from 'react'
import { ImageUploader } from '@/presentation/components/ImageUploader'
import { Separator } from @/presentation/components/ui/separator'
// (el resto de imports no cambia)

export function ProductDialog({ open, onOpenChange, product, categories }: ProductDialogProps) {
  const [isLoading, setIsLoading] = useState(false)
  const createProduct = useAdminStore((s) => s.createProduct)
  const updateProduct = useAdminStore((s) => s.updateProduct)
  const uploadProductImage = useAdminStore((s) => s.uploadProductImage) // ← nuevo

  const isEditing = Boolean(product)
  // ... (handleSubmit y defaultValues no cambian respecto al módulo 11)

  async function handleImageUpload(file: File) {
    if (!product) return // no debería ocurrir: el bloque solo se renderiza en modo edición
    await uploadProductImage(product.id, file)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>

        {isEditing && product && (
          <>
            <div className="space-y-2">
              <h3 className="text-sm font-medium">Imagen del producto</h3>
              <p className="text-xs text-muted-foreground">
                La imagen se sube al instante; no es necesario guardar el formulario.
              </p>
              <ImageUploader currentImageUrl={product.image} onUpload={handleImageUpload} />
            </div>
            <Separator />
          </>
        )}

        <ProductForm
          key={product?.id ?? 'new'}
          defaultValues={defaultValues}
          onSubmit={handleSubmit}
          isLoading={isLoading}
          categories={activeCategories}
        />
      </DialogContent>
    </Dialog>
  )
}