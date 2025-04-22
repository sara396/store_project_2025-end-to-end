using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace DAL.models
{
    public partial class GameStoreContext : DbContext
    {
        public GameStoreContext()
        {
        }

        public GameStoreContext(DbContextOptions<GameStoreContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Buy> Buys { get; set; } = null!;
        public virtual DbSet<Category> Categories { get; set; } = null!;
        public virtual DbSet<Customer> Customers { get; set; } = null!;
        public virtual DbSet<Game> Games { get; set; } = null!;
        public virtual DbSet<SaleDetail> SaleDetails { get; set; } = null!;

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Data Source=DESKTOP-783IDMP\\SQLEXPRESS;Initial Catalog= GameStore;Integrated Security=True; MultipleActiveResultSets=True; Application Name=EntityFramework");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Buy>(entity =>
            {
                entity.ToTable("Buy");

                entity.Property(e => e.BuyDaty).HasColumnType("date");

                entity.Property(e => e.CustId).HasColumnName("CustID");

                entity.HasOne(d => d.Cust)
                    .WithMany(p => p.Buys)
                    .HasForeignKey(d => d.CustId)
                    .HasConstraintName("FK__Buy__CustID__5535A963");
            });

            modelBuilder.Entity<Category>(entity =>
            {
                entity.ToTable("Category");

                entity.Property(e => e.CategoryName).HasMaxLength(20);
            });

            modelBuilder.Entity<Customer>(entity =>
            {
                entity.HasKey(e => e.CustId)
                    .HasName("PK__Customer__049E3A8957A1CB4B");

                entity.ToTable("Customer");

                entity.Property(e => e.CustId).HasColumnName("CustID");

                entity.Property(e => e.CustCreditDetails).HasMaxLength(20);

                entity.Property(e => e.CustName).HasMaxLength(20);

                entity.Property(e => e.CustPassWord).HasMaxLength(20);
            });

            modelBuilder.Entity<Game>(entity =>
            {
                entity.Property(e => e.GameId).HasColumnName("GameID");

                entity.Property(e => e.GameImg).HasMaxLength(20);

                entity.Property(e => e.GameName).HasMaxLength(20);

                entity.HasOne(d => d.GameCategoryNavigation)
                    .WithMany(p => p.Games)
                    .HasForeignKey(d => d.GameCategory)
                    .HasConstraintName("FK__Games__GameCateg__4AB81AF0");
            });

            modelBuilder.Entity<SaleDetail>(entity =>
            {
                entity.HasKey(e => e.SaleCode)
                    .HasName("PK__SaleDeta__0F57A49E6D56B828");

                entity.Property(e => e.GameId).HasColumnName("GameID");

                entity.HasOne(d => d.Buy)
                    .WithMany(p => p.SaleDetails)
                    .HasForeignKey(d => d.BuyId)
                    .HasConstraintName("FK__SaleDetai__BuyId__5812160E");

                entity.HasOne(d => d.Game)
                    .WithMany(p => p.SaleDetails)
                    .HasForeignKey(d => d.GameId)
                    .HasConstraintName("FK__SaleDetai__GameI__59063A47");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
